// routes/uploadRoutes.js
import express from 'express';
import multer from 'multer';
import Image from '../models/Image.js';

const router = express.Router();

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Files will be saved to 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to handle file upload
router.post('/', upload.array('files'), async (req, res) => {
  try {
    // Save each uploaded file info to the database
    const files = req.files.map((file) => ({
      filename: file.filename,
      originalName: file.originalname,
      path: file.path,
      extension: file.mimetype.split('/')[1],
    }));

    const images = await Image.insertMany(files);
    res.status(200).json({ success: true, data: images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Upload failed' });
  }
});

export default router;
