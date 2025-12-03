const express = require("express");
const cors = require("cors");
const sequelize = require("./conn_db");
const routes = require("./routes");

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api", routes);

const PORT = 1433;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o SQL Server estabelecida!');
        await sequelize.sync();
        console.log('🧱 Tabelas sincronizadas!');

        app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
    } catch (error) {
        console.error('❌ Erro ao conectar ao banco:', error);
    }
})();
