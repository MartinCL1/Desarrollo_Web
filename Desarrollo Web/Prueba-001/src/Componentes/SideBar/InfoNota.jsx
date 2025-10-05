import Close from "../Botones/Close";
import "./global.css";
import { motion } from "framer-motion";

const InfoNota = ({ cerrarBarra }) => {
  return (
    <motion.section className="wrapper">
      <Close accion={cerrarBarra} />
      <div className="nota-form">
        <div className="info-nota">
          <h2>Titulo de la nota</h2>
          <p className="info-nota">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus sit saepe maiores ducimus sed odit molestias officiis
            ipsum, earum incidunt dolor consequuntur adipisci beatae minima
            velit rerum ipsam nihil nemo. Ut est rem obcaecati nulla iste animi
            voluptatem, cumque voluptatibus esse? Reiciendis et modi
            repellendus, exercitationem a nam natus minima quo, quis cupiditate
            iste praesentium odit laboriosam ut nisi quas. Alias vero nostrum
            voluptate accusamus labore dolorum asperiores, itaque necessitatibus
            laudantium delectus repellendus aliquid eum inventore sequi!
            Nesciunt vero eum nobis, est quia minus quibusdam itaque eius!
            Numquam, delectus vero. Necessitatibus adipisci atque odit
            voluptatem voluptates quod ab quam vitae, placeat dolor accusantium
            corporis repudiandae labore impedit aliquid quae doloremque
            delectus? Est veritatis consequatur eum vero culpa ad illo esse.
            Labore quaerat dignissimos quasi temporibus quisquam perferendis,
            voluptates distinctio et nihil expedita porro, amet dicta eius nobis
            quae dolor mollitia impedit illum deserunt culpa architecto
            asperiores optio commodi cumque! Doloremque?
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default InfoNota;
