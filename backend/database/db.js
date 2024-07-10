const mongoose = require("mongoose");

const url = "mongodb+srv://kaanerdemm1:57vj05WhdqQHylXi@cluster0.9e98b1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connection = () => {
    mongoose.connect(url, {
       useNewUrlParser: true, // araştırılacak
       useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb bağlantısı başarılı"))
    .catch((err) => console.log("Bağlantı Hatası! Hata: " + err.message));
}

module.exports = connection;