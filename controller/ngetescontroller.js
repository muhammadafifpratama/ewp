const postgres = require ("../helper/db")


module.exports = {

    tes:(req,res) => {
        postgres.query("select * from ewp", (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results)
          })
    },
    create:(req,res) => {
        postgres.query('CREATE TABLE IF NOT EXISTS mapa ( id SERIAL PRIMARY KEY, pn_kepala_uka VARCHAR, info_team_audit JSON, audit_type_kode VARCHAR NOT NULL, status VARCHAR, status_persetujuan VARCHAR, number_adendum SMALLINT, info_periode_pelaksanaan_start DATE, Info_periode_pelaksanaan_end DATE );'
          , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results)
          })
    }

//

}