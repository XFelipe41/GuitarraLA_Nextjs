import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout title={"Nosotros"} description="Sobre guitaras y mas ">
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />

          <div>
            <p>
              {" "}
              Phasellus gravida erat nibh, nec ornare risus vulputate vitae.
              Duis fermentum ligula nibh, non interdum odio scelerisque ut.
              Fusce sed dolor arcu. Proin sodales lacus vitae odio congue
              rhoncus. Proin posuere erat ipsum, quis imperdiet mauris semper
              non. Nulla eget nibh sagittis neque consectetur tincidunt.
            </p>
            <p>
              {" "}
              Integer tempor volutpat tellus commodo finibus. Suspendisse id
              tortor et augue feugiat pellentesque non in massa. Donec porttitor
              viverra diam. Mauris tincidunt velit pulvinar eros egestas, in
              ultricies est interdum. Maecenas congue augue eu metus euismod, ac
              feugiat quam fermentum. Maecenas lectus magna, iaculis quis felis
              in, cursus scelerisque dolor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
