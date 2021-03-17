import Head from "next/head";

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />

      {/* Metadata para compartir en redes sociales */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TU_USER" />
      <meta name="twitter:creator" content="@TU_USER" />
      <meta name="twitter:title" content="Platzi Conf Store" />
      <meta name="twitter:description" content="Platzi Conf Store" />
      <meta
        name="twitter:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
      <meta property="og:title" content="Platzi Conf Store" />
      <meta property="og:description" content="Platzi Conf Store" />
      <meta
        property="og:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
      <meta property="og:url" content="platzistore.xyz" />
      <meta property="og:site_name" content="Platzi Conf Store" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Head>
  );
};

Seo.defaultProps = {
  title: "Lambda - Innovación en la construcción",
  description: "Los mejores cursos para el sector construcción",
};
export default Seo;
