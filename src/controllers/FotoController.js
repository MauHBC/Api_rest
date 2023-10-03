import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Aluno from '../models/Aluno';

import Foto from '../models/Foto';

// 'foto' é o nome do campo/key no thunder client
const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const aluno = await Aluno.findByPk(aluno_id);

        if (!aluno) {
          return res.status(400).json({
            errors: ['Aluno não existe.'],
          });
        }
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
