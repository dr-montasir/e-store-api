const mongoose = require('mongoose');
const config = require('./config');

mongoose.set('strictQuery', false);
mongoose
  .connect(config.Db.Uri, {})
  .then(() =>
    console.log(
      `${' '.repeat(3)}DB connected...${' '.repeat(3)}\n🔥${'='.repeat(33)}🔥\n`
    )
  )
  .catch((err) => console.log('DB Error => ', err));
