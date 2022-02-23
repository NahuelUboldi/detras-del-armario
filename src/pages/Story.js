import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';

// const [name, setName] = useState(() => {
//   // getting stored value
//   const saved = localStorage.getItem("name");
//   const initialValue = JSON.parse(saved);
//   return initialValue || "";
// });

function Story() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    const parsedData = JSON.parse(savedData);
    return parsedData || 'not data found';
  });
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>

            <ul>
              <li>Nombre: {data.nombre}</li>
              <li>Nombre gustaba: {data.nombreGustaba}</li>
              <li>Banda: {data.banda}</li>
              <li>Compañerita: {data.compañerita}</li>
              <li>Mejor Amigo: {data.mejorAmigo}</li>
              <li>Maestra: {data.maestra}</li>
            </ul>
            <h1 className="h1">Detrás del Armario</h1>
            <p>
              Era un armario blanco de metal pesado, tipo gabinete, que siempre
              estaba cerrado con llave. De todos modos, lo que contenía adentro
              no nos importaba. La gracia estaba en su separación con la pared,
              que era de unos sesenta centímetros, más o menos. Ese espacio
              formaba una suerte de recoveco o pasillo sin salida donde cabíamos
              seis niños en estado natural y once o doce en estado de apretuje.
            </p>
            <p>
              Al principio, entrábamos para dibujar corazones. "{data.nombre} y
              {data.nombreGustaba}", escribí yo. Después dije que eso no había
              sido escrito por mí, obvio. Pero mientras tanto sentía ese calor
              subirme a los pómulos y a la frente cuando me cargaban con{' '}
              {data.nombreGustaba}, como si de verdad tuviéramos algo.
            </p>
            <p>
              Al fondo del recoveco había un garabato singular: el nombre de
              Agus Mezza, que le gustaba a medio colegio, fue usado para tres
              corazones superpuestos hechos con distintos fibrones. Desde ese
              entonces, le decimos Agus Tres Corazones. Confieso que a mí
              también me gustaba un poquito Agus, a quién no.
            </p>
            <p>
              Un día, éramos tantos los que entramos a escribir las pasiones de
              cada cual como si no existiese otra forma de tirar verdades que
              nos empezamos a amontonar uno sobre otro, igual que los mensajes y
              garabatos.
            </p>
            <p>
              Alguien dibujó el logo del grupo de cumbia Red, con otro fibrón le
              agregaron Hot Chilli Peppers. Más abajo, la lengua de los Rolling
              lamía a Pappo Napolitano. Algunos teníamos el gusto firme en
              {data.banda} y nos repartimos las letras para escribirlo bien
              grande. Creo que por eso fuimos los primeros en ser apretujados.
            </p>
            <p>
              Era asfixiante y a la vez nos hacía muy felices. Todos los que
              íbamos a séptimo grado división B sabíamos lo que pasaba detrás
              del armario, hasta Lulo lo sabía, el chico al que siempre se le
              caía la baba en clase. Cuando sonaba el timbre, nos conteníamos
              para no abalanzarnos sobre el armario porque la maestra podía
              descubrir nuestro pequeño goce de apretarnos y comprimirnos hasta
              que entráramos la mayor cantidad posible de nosotros ahí atrás.
            </p>
            <p>
              Nos apelmazábamos a punto de fundición, hasta que no sentíamos ni
              las manos ni las piernas. Era lo más parecido a un agujero negro
              que se podía experimentar, se nos confundía hasta el aliento,
              viciado de olor a chicles de menta y frutilla. El que se metía
              primero terminaba siendo el más aplastado por todos contra el
              final del pasillito. En esa posición, podía uno levantar los pies
              y mantenerse en el aire solo por la fuerza de la compresión.
            </p>
            <br /> <br />
            <p>
              Como en el aula ya no quedaba ningún incauto que se metiera
              primero para recibir la avalancha de cuerpos encima suyo, tuvimos
              que organizarnos para buscar potenciales sacrificados que, en
              clave, llamábamos “gomitas". Durante la clase tejíamos estrategias
              para cazar gomitas de séptimo A y séptimo C. El proceso consistía
              en elegir una presa, alguien a quien tuviésemos ganas de
              apretujar, le intuíamos un punto débil, algo que la entusiasmara a
              acercarse, un mensaje de anzuelo, después el armario hacía lo
              suyo, era como un llamado irresistible a leer, tachar, subrayar o
              a seguir escribiendo. Y ahí dábamos el zarpazo.
            </p>
            <p>
              Recuerdo que una de las gomitas que más disfrutamos fue
              {data.compañerita}, una chica fina del séptimo A. La llevamos
              hasta las fauces del armario con el verso de que ahí atrás decía "
              {data.compañerita} y Lulo N". Entonces ella se metió detrás del
              armario, llena de furia, pero sin perder su altivez, para borrar
              la calumnia de amor con un baboso. Nuestras miradas y señas eran
              de lo más sutiles por innecesarias. Una vez que {data.compañerita}
              entró, como quien no quiere la cosa, fueron dos compañeras a
              cerrarle el paso. Con {data.mejorAmigo} teníamos el pecho inflado
              por haberla cazado y nos acercamos a apretarla con un poco de
              vergüenza por haberla engañado y también con un poco piedad porque
              era su primera vez detrás del armario y se podía asustar. Metíamos
              presión lentamente, faltaba poco para que termine el recreo.
              Llegaron algunos que habían estado jugando afuera. Se respiraba
              con dificultad, había olor a guardapolvo de viernes. Los del medio
              nos quejábamos como para ponerle un canto al balanceo entre las
              fuerzas. Aunque los pies se nos resbalaban, no dejábamos de
              apretar. Con {data.mejorAmigo} salimos un rato a flote y
              alcanzamos a divisar la cara de {data.compañerita}, todavía
              buscando el corazón de la calumnia. Enojada nos preguntó dónde
              estaba eso que le dijimos. Queríamos reírnos a carcajadas, pero no
              nos daban los pulmones, así que nos guardamos la risa para cuando
              hubiera pasado el recreo.
            </p>
            <p>
              Cuando sonaba el timbre y nos desparramábamos cada uno en su
              silla, parecíamos trapos de piso estrujados, la {data.maestra}
              preguntaba qué nos había pasado. Le dábamos excusas o nombrábamos
              listas de juegos y ella no indagaba más porque le gustaba el
              estado manso que adquiríamos.
            </p>
            <p>
              Pero nos dimos cuenta de que era sospechoso que los que se
              quedaban adentro terminaran más cansados que los pocos que salían
              a jugar afuera.
            </p>
            <p>
              Una mañana, saludamos a la bandera y la directora nos pegó un reto
              colectivo a todo el curso: “Yo no sé qué pasa ahí atrás de ese
              armario de séptimo B, pero no van a entrar más ahí, no quiero
              escuchar ningún grito desde ese sucucho". Alguien nos buchoneó,
              alguna gomita de otro séptimo, alguien que quiso entrar y no se
              animó o alguno que no se supo entregar al momento de fundición.
            </p>
            <p>
              Eso nos obligó a organizarnos mejor. Nos dividimos en grupos
              rotativos. Un primer grupo grande tenía que salir al patio para
              practicar juegos fácilmente reconocibles por las maestras. Un
              segundo grupo, chico, debía cazar gomitas de los otros séptimos,
              mientras que el resto, el grupo trampero, tenía que esperar a que
              los cazadores trajeran la presa. Y la regla de oro: nadie podía
              emitir sonido alguno durante el amontonamiento detrás del armario.
            </p>
            <p>
              La intriga era otro llamador. Nos gustaba escuchar teorías de lo
              más descabelladas que se tejían acerca del armario, provenientes
              de los que nunca habían estado ahí.
            </p>
            <p>
              Una vez, con {data.mejorAmigo} cazamos al chico más inteligente de
              todos los séptimos, era el abanderado, a mitad de camino se dio
              cuenta de que lo llevábamos para algo raro. Entonces le dijimos la
              verdad, que lo llevábamos para un aplastamiento, pero que la iba a
              pasar muy bien de todos modos. Y aceptó como por curiosidad. Lo
              apretujamos entre unos pocos, no hicimos mucho ruido, él colaboró
              con su silencio.
            </p>
            <p>
              A medida que pasaba el tiempo se hacía difícil conseguir presas y
              mucho más que fueran discretas como el abanderado. Se nos ocurrió
              que podíamos hacerlas nuestras cómplices, es decir que cada nueva
              gomita nos ayudara a encontrar otra víctima que ignorase lo que
              pasaba detrás del armario.
            </p>
            <p>
              Así fue que dos gomitas del séptimo C nos trajeron a la portera,
              una chica de campo, jovencita y muy buena. Se habían olvidado de
              cerrar la puerta del aula y éramos casi catorce apretándola, creo
              que esa fue la vez de mayor concurrencia. La portera no entendía
              qué propósito tenía tal apretuje, salió del aula muy sigilosa, con
              miedo a que la directora o la vice se enteren de lo que pasó, de
              que fue trampeada por unos alumnitos de séptimo grado.
            </p>
            <p>
              Eso nos envalentonó para tratar de cazar a Agus Tres Corazones.
              Algunos esperamos cerca del armario, otros se embarcaron en su
              búsqueda, con la excusa de que fuera a ver las cosas escritas
              sobre su persona.
            </p>
            <p>
              Al parecer, Agus ya sabía de la treta y no cayó. Fue como si los
              corazones se hubieran roto en forma de big bang, con la misma
              fuerza que nos apretábamos, pero en el sentido opuesto.
            </p>
            <br />
            <br />
            <p>
              Se acercaba fin de año, pasaron días sin que podamos cazar nada
              valioso. Si mirábamos detrás del armario se sentía la tristeza de
              los lugares que suelen estar llenos de gente y un día están
              vacíos. A falta de presa, nos ofrecíamos como gomitas nosotros
              mismos. Sí, nosotros el séptimo B, que supimos ser cazadores,
              ingeniosos tramperos, sumos empujadores últimos. La depresión se
              sentía en el aire, nada era tan emocionante como salir a cazar
              gomitas de otros séptimos.
            </p>
            <p>
              Un lunes como cualquier otro, nadie nos retó, ni la directora ni
              las maestras nos dieron sus advertencias en cuanto a “lo que sea
              que pasa en ese armario". Saludamos a la Patria y la{' '}
              {data.maestra} nos hizo entrar al aula y arrimar el armario a la
              pared.
            </p>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Finalizar Experimento</button>
 
      {isModalOpen ? (
        <Modal title={"Experimento terminado"} text={"El recuerdo ha sido implantado con éxito."} lastModal={true} />
      ) : null}
    </>
  );
}

export default Story;
