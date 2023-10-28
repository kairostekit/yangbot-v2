const context = require.context('../../.././assets/img', false, /\.(jpg|jpeg|png|gif)$/);

const images = context.keys().map(key => ({
  url: key,
  name: key.split('/').pop(), // ดึงชื่อไฟล์ออกจาก URL
}));

export default images;
