// Datos de productos organizados por categoría
const productos = {
    labios: [
        {
            id: 2,
            nombre: "Gloss Brillo Aura Mocca",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Gloss-brillo-Aura-Mocca-Trendy-1.png",
            descripcion: "Tono café nude sofisticado. Contenido: 10 gr."
        },
        {
            id: 3,
            nombre: "Labial Brillo Boutique",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Labial-brillo-boutique-Trendy-.png",
            descripcion: "Efecto volumen inmediato. Tono al azar (translúcidos). 2,5 ml."
        },
        {
            id: 4,
            nombre: "Labial Hidratante Bloomshell",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/02/BG-Labial-hidratante-Bloomshell-Sparkle-kiss-1.png",
            descripcion: "Color radiante con brillo sutil. Acabado luminoso. Contenido: 4 gr."
        },
        {
            id: 5,
            nombre: "Juicy Lips Montoc Hidratante",
            precio: 28000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/solo-k-prohibido-lau-2025-12-28T141616.545.png",
            descripcion: "Hidratación y acabado jugoso. Brillante y fresco. Contenido: 4 gr."
        },
        {
            id: 6,
            nombre: "Tinta en Crema Ruby Rose",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/10/Formato-PW-no-usar.png",
            descripcion: "Acabado aterciopelado, color intenso y duradero. Contenido: 8 gr."
        },
        {
            id: 7,
            nombre: "Lip Gloss con Llavero",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/09/Formato-PW-no-usar-4-1.png",
            descripcion: "Portátil y práctico. Contenido: 8 gr. + llavero incluido."
        },
        {
            id: 8,
            nombre: "Lip Oil Collection Atenea",
            precio: 32000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/portada-1.png",
            descripcion: "Aceite labial hidratante con brillo translúcido. Contenido: 5 ml."
        },
        {
            id: 9,
            nombre: "Lip Gloss Aozy Fashion",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Formato-PW-no-usar-1-2.png",
            descripcion: "6 tonos disponibles, acabado luminoso. Contenido: 4 g."
        },
        {
            id: 10,
            nombre: "Lip Gloss Chocolate Purpure",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Formato-PW-no-usar-8-1.png",
            descripcion: "Aroma a chocolate, acabado jugoso. Contenido: 10 ml."
        },
        {
            id: 11,
            nombre: "Lip Gloss Piña Colada Purpure",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Formato-PW-no-usar-7-1.png",
            descripcion: "Toque tropical, textura ligera. Contenido: 10 ml."
        },
        {
            id: 12,
            nombre: "Kit x 5 Labiales Girgy",
            precio: 85000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/11/Formato-PW-no-usar-2025-11-24T110346.576.png",
            descripcion: "Set perfecto con 5 labiales. Textura cremosa, alta pigmentación y acabado suave. Kit de 5 labiales x 2.1g cada uno."
        },
        {
            id: 13,
            nombre: "Brillo Cojín Coffee Engol",
            precio: 13000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Brillo-cojin-coffe-Engol-1.png",
            descripcion: "Tono café sutil, efecto jugoso. Contenido: 16 ml."
        },
        {
            id: 14,
            nombre: "Labial Gloss Café Coffee Trendy",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Labial-gloss-cafe-coffe-Trendy-.png",
            descripcion: "Color cálido y sofisticado. Contenido: 10 ml."
        },
        {
            id: 15,
            nombre: "Kit x 5 Brillos Garden Gloss",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/10/Kit-x-5-brillos-garden-gloss-Trendy.png",
            descripcion: "Cinco tonos brillantes y versátiles. Acabado luminoso y jugoso. Contenido: 5 gloss (5 ml c/u)."
        },
        {
            id: 16,
            nombre: "Lip Gloss Honey Purpure",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/solo-k-prohibido-lau-2026-01-15T120341.476.png",
            descripcion: "Brillo delicioso con efecto jugoso. Fórmula ligera y no pegajosa. Contenido: 5 ml."
        },
        {
            id: 17,
            nombre: "Duo Shell Tint + Mini Mimosa Bloomshell",
            precio: 26000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/Formato-PW-no-usar-5.png",
            descripcion: "Set encantador con color y brillo. Llavero cute incluido. Contenido: 11 g."
        },
        {
            id: 18,
            nombre: "Lip Spiral Glow Candy Purpure",
            precio: 17000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/solo-k-prohibido-lau-51.png",
            descripcion: "Hidratación profunda con acabado glossy. Textura suave y no pegajosa. Contenido: 8 gr."
        },
        {
            id: 19,
            nombre: "Lip Balm Glossy Purpure",
            precio: 17000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/solo-k-prohibido-lau-43.png",
            descripcion: "Bálsamo labial con acabado glossy irresistible. Labios jugosos y brillantes. Contenido: 12 gr."
        },
        {
            id: 20,
            nombre: "Bálsamo Mágico Hidratante Melu",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/Formato-PW-no-usar-20-1.png",
            descripcion: "Realza el tono natural con efecto jugoso. Cambia de color al contacto. Contenido: 3.2 g."
        },
        {
            id: 21,
            nombre: "Gel Tint Soft y Velvet Melu",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/Formato-PW-no-usar-16.png",
            descripcion: "Fórmula tipo gel con acabado aterciopelado. Larga fijación y confort total. Contenido: 2.5 ml."
        },
        {
            id: 22,
            nombre: "Lippie Balm Montoc Hidratante",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/lippie-balm-montoc.jpg",
            descripcion: "Mantiene tus labios hidratados y protegidos de la sequedad. Forma barrera protectora. Peso: 3.4 gr."
        },
        {
            id: 23,
            nombre: "Lippie Booster Montoc Bálsamo Hidratante",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/lippie-booster-montocc.jpg",
            descripcion: "Nutre profundamente, labios suaves y plump. Protección diaria contra sequedad. Peso: 3.4 gr."
        },
        {
            id: 24,
            nombre: "Spiral Gloss Montoc Hidratante",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-2025-07-08T075303.098.png",
            descripcion: "Gloss bicolor con doble color en espiral. Brillo intenso, textura ligera no pegajosa. Contenido: 6.3 gr."
        },
        {
            id: 25,
            nombre: "Lip Butter Humide Montoc Mantequilla Labios",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/formato-pw-NO-USAR-20.png",
            descripcion: "Mantequilla hidratante tipo gloss. Labios suaves, hidratados y brillantes todo el día. Contenido: 10 ml."
        },
        {
            id: 26,
            nombre: "Lip Oil Comfort Lip Montoc",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/comfort-lip-montoc-lip-oil.jpg",
            descripcion: "Nutre intensamente, deja labios suaves y humectados. Brillo ligero sin sensación pegajosa. Peso: 6 gr."
        },
        {
            id: 27,
            nombre: "Lápiz Delineador de Labios Montoc",
            precio: 14000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/kit-crema-corporal-splash-2025-01-29T181317.750.png",
            descripcion: "Color intenso y acabado impecable. Alta pigmentación, textura suave y de larga duración. Peso: 1.2 gr."
        },
        {
            id: 28,
            nombre: "Labial Hidratante Click Gloss Pro Montoc",
            precio: 24000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-84.png",
            descripcion: "Hidrata y suaviza. Brillo intenso sin sensación pegajosa. Acabado natural y jugoso, ideal para uso diario. Peso: 4g."
        },
        {
            id: 29,
            nombre: "Lápiz de Ojos y Labios 2 en 1 Engol",
            precio: 3000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/10/Formato-PW-no-usar-90.png",
            descripcion: "Versátil para delinear ojos y labios. Textura cremosa, trazos intensos y duraderos. Peso: 2.35 gr."
        },
        {
            id: 30,
            nombre: "Lip Gloss Kaba Hidratante",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-gloss.png",
            descripcion: "Efecto volumen inmediato. Rose Velvet o Golden Hour. Hidrata sin pegajosidad. Peso: 5 gr."
        },
        {
            id: 31,
            nombre: "Lip Glow Hidratante Ruby Rose",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/Formato-pw-NO-USAR-17.png",
            descripcion: "Color personalizado según pH. Hidratación intensa, textura no pegajosa. Vegano y cruelty free. Peso: 5.5 gr."
        },
        {
            id: 1782611667281,
            nombre: "Catlips Trendy labial hidratante",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/10/catlips-1.jpg",
            descripcion: "Labial Hidratante Cat Lips Trendy  Incluye un balsamo humectante en el centro del labial que hidrata profundamente tus labios. No reseca ni cuartea tus labios. Aporta un tono sutil y hermoso a tus labios Peso / Contenido : 3.2 g"
        },
        {
            id: 1782611821746,
            nombre: "Tinta Gloss Trendy Corazón",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/07/STN-TGT18961.jpeg",
            descripcion: "Tinta Gloss Trendy – Peso / Contenido: 7 ml  Empaque divino para que lleves a todas partes Es ideal para dar un toque de color duradero a tus labios Mantiene tus labios suaves e hidratados"
        },
        {
            id: 1782612384907,
            nombre: "Voluminizador Trendy Smoothie",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/07/voluminizador-trendy-peach.jpg",
            descripcion: "Voluminizador de labios Trendy – Peso / Contenido : 8 ml  Deja un acabado brillante cero pegajoso en tus labios Efecto volumen hasta por 2 horas No reseca tus labios"
        },
        {
            id: 1782612635269,
            nombre: "Labial Profesional Trendy 2 en 1 Eclipse",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/0-2024-05-28T120143.909.png",
            descripcion: "Por un costado viene un gloss con color y por el otro un labial en barra que aporta un acabado semi mate precioso.  Peso /Contenido: 1.6 g + 5 ml"
        },
        {
            id: 1782780588813,
            nombre: "Brillo Cotton Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/07/brillo-cotton-trendy-1.jpg",
            descripcion: "Brillo Cotton Trendy (5.3 ml - tono al azar)  Acabado brillante que realza los labios con luminosidad.  Fórmula con hidratación duradera, mantiene labios suaves todo el día.  Aplicación suave y cómoda, sin sensación pegajosa."
        },
        {
            id: 1782783104962,
            nombre: "Labial Red Velvet Trendy",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/07/STN-LRV20512.jpeg",
            descripcion: "Labial Red Velvet Trendy  Acabado mate aterciopelado en tus labios 6 tonos divinos que dejan tus labios hermosos No cuartean ni resecan tu labios"
        },
        {
            id: 1782784387780,
            nombre: "Brillo Gloss Hidratante Trendy Aura",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/gloss-aura-trendy.png",
            descripcion: "Dale a tus labios un look jugoso y radiante con el Brillo Gloss Hidratante Trendy Aura. Su fórmula ligera aporta brillo intenso, suavidad y un acabado fresco que resalta tu sonrisa. Ideal para usar solo o sobre tu labial favorito.  Peso: 10.2 ml"
        },
        {
            id: 1782784935836,
            nombre: "Gloss Color Cherry Trendy",
            precio: 14000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/08/gloss-color-cherry-trendy-1.jpg",
            descripcion: "Gloss Color Cherry (3.8 g)  Color cherry intenso que resalta y embellece los labios con elegancia y frescura.  Acabado glossy que maximiza el brillo y el atractivo, con aspecto jugoso y seductor.  Fórmula nutritiva con hidratación duradera que cuida y suaviza los labios."
        },
        {
            id: 1782925769756,
            nombre: "Tinta de labios princesas Bella Trendy terciopelo",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Tinta-de-labios-princesas-Bella-Trendy-terciopelo.png",
            descripcion: "Dale color y suavidad a tus labios con la Tinta de Labios Princesas Bella Terciopelo de Trendy. Su fórmula ligera proporciona un acabado aterciopelado y confortable, dejando un color uniforme y de apariencia natural durante horas.  Contenido: 4 ml."
        },
        {
            id: 1782926091936,
            nombre: "Tinta Pretty things Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/07/Kit-Arandanos-Anti-Arrugas-Anti-Edad-Rejuvenecimiento-22.png",
            descripcion: "Tinta para labios Trendy – Peso / Contenido : 3 ml  Es ideal para unos labios naturales y muy provocativos Formula de larga duraciòn que hidrata tus labios Elije entre 6 tonos tu favorito"
        },
        {
            id: 1782926370375,
            nombre: "Brillo Gloss Maddie Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/08/Paleta-de-sombras-Puppie-Colection-Trendy-2.png",
            descripcion: "Labios radiantes, jugosos y con un toque de color irresistible. Fórmula ligera y cómoda para usar todos los días 💖.  Peso: 4.4 ml"
        },
        {
            id: 1782926942021,
            nombre: "Kit x8 Gloss Forever Trendy",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/12/Kit-x8-Gloss-Forever-Trendy-.png",
            descripcion: "Kit x 8 gloss con color para que completes tu rutina de maquillaje.  Peso / Contenido: 8 gloss 5 g c/u  🌈 Tonos irresistibles que se ven hermosos solos o sobre labial 💧 Fórmula hidratante que deja los labios suaves y jugosos"
        },
        {
            id: 1782930242683,
            nombre: "Tinta Villanos Disney Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/04/Materiales-de-alta-calidad-que-aseguran-una-larga-vida-util-de-la-brocha.-46.png",
            descripcion: "Labios con un rojo leve, perfecto para cualquier ocasión con las nuevas tintas edición villanas de Disney.  Peso / Contenido: 3.2 g  Beneficios: ✔️ Color ligero y natural con efecto tinta. ✔️ Hidratación profunda gracias a sus aceites nutritivos."
        },
        {
            id: 1782937213538,
            nombre: "Brillo lip oil Sandía Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/Formato-PW-no-usar-42.png",
            descripcion: "Brillo Lip Oil Sandía Trendy: un aceite labial ligero, fresco y con aroma a sandía que hidrata profundamente mientras aporta un brillo jugoso. Disponible en 4 tonos que realzan tus labios con un acabado natural y saludable.  Peso / Contenido : 4 ml"
        },
        {
            id: 1782938094925,
            nombre: "Tinta gloss Jack Disney Trendy",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/04/Materiales-de-alta-calidad-que-aseguran-una-larga-vida-util-de-la-brocha.-43.png",
            descripcion: "Logra unos labios vibrantes, jugosos y cuidados con la Tinta gloss Jack Disney Trendy, que combina el color intenso de una tinta con el poder nutritivo de un gloss con un toque de color rosa. Su fórmula ligera hidrata mientras aporta un acabado natural y duradero que realza la belleza de tus labios.  Peso / Contenido: 3.2 g"
        },
        {
            id: 1782940032491,
            nombre: "Lip Gloss Barbie Vaquera Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/10/solo-ka-prohibido-lau-3.png",
            descripcion: "Dale a tus labios un toque brillante y divertido con el Lip Gloss Edición Barbie Vaquera de Trendy. Su fórmula ligera y cómoda deja un acabado jugoso, realzando la belleza natural de tus labios con un toque de estilo único.  Peso / Contenido : 9 ml"
        },
        {
            id: 1782940334064,
            nombre: "Mascarilla labios barbie Trendy",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Mascarilla-labios-barbie-Trendy-.png",
            descripcion: "Mascarilla para Labios Barbie Trendy  Fórmula nutritiva e hidratante que restaura la suavidad de los labios.  Proporciona sensación de confort y aspecto más saludable.  Ideal como tratamiento intensivo para labios resecos."
        },
        {
            id: 1782941265702,
            nombre: "Lip Balm princesas Aurora Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Lip-Balm-princesas-Aurora-Trendy-.png",
            descripcion: "Lip Balm Princesas Aurora Trendy  Hidrata y suaviza tus labios con el Lip Balm Princesas Aurora de Trendy. Su fórmula ayuda a mantener los labios humectados, protegidos y con una apariencia suave y saludable, ideal para el uso diario.  Contenido: 4 gr."
        },
        {
            id: 1782941578917,
            nombre: "Tinta y brillo doggie lips Trendy",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/06/Tinta-y-brillo-doggie-lips-Trendy-4.png",
            descripcion: "Consigue unos labios con color y brillo en un solo producto gracias a la Tinta y Brillo Doggie Lips de Trendy. Su práctico formato combina una tinta de larga duración con un gloss brillante, permitiéndote crear diferentes acabados según tu estilo y ocasión."
        },
        {
            id: 1782941848247,
            nombre: "Bálsamo labios agrietados Trendy",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/11/o-26.png",
            descripcion: "Bàlsamo hidratante reparador de labios Trendy  Aporta un sutil color rojito Se envía tono al azar, ambos pigmentan parecido  Peso: 4gr."
        },
        {
            id: 1782942112253,
            nombre: "Set x3 Brillos gloss Pills Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/0-2024-05-28T115516.357.png",
            descripcion: "Set x3 Brillos Gloss Pills Trendy (3 x 3 ml = 9 ml total)  Brillo espectacular con efecto espejo y acabado fresco.  Fórmula ligera y no pegajosa.  Ideal para usar solo o sobre tu labial favorito.  Resalta la sonrisa con un look jugoso y radiante."
        },
        {
            id: 1782948730367,
            nombre: "Brillo Tornasol Retro Kisses Trendy",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/10/Brillo-Retro-Kisses-Trendy.jpeg",
            descripcion: "Brillo Shine Hidratante Trendy  Luce unos destellos delicados y hermosos en tus labios con nuestro brillo shine, su formula es ligera y no reseca tus labios, aporta un tono suave con olor delicioso.  Contenido: 5 gr."
        },
        {
            id: 1782948879097,
            nombre: "Bálsamo labios resecos Rosas Trendy",
            precio: 7000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/11/o-11.png",
            descripcion: "Hidrata, suaviza y protege los labios Toque  natural, ideal para el verano Textura cremosa y ligera  Peso / Contenido : 3.5 g"
        },
        {
            id: 1782948995516,
            nombre: "Voluminizador Labios en Barra Trendy",
            precio: 7000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/07/Kit-Arandanos-Anti-Arrugas-Anti-Edad-Rejuvenecimiento-19-1.png",
            descripcion: "Voluminizador de labios en barra – Peso / Contenido : 3.5 g  Da un toque de volumen natural a tus labios con este espectacular brillo en barra es hidratante y posee un aroma delicioso Deja una sensaciòn de picor la cual es normal mientras da el efecto de volumen a tus labios"
        },
        {
            id: 1782949148053,
            nombre: "Brillo para labios shine Cherry Trendy",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/10/Brillo-shine-Cherry-Trendy-1.png",
            descripcion: "Brillo Shine Hidratante Trendy  Luce unos destellos delicados y hermosos en tus labios con nuestro brillo shine, su formula es ligera y no reseca tus labios, aporta un tono suave con olor delicioso.  Contenido: 5 gr."
        },
        {
            id: 1782950408826,
            nombre: "Labial Duo Velvet Mate Profesional Trendy",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/06/color-intenso-y-vibrante-que-se-mantiene-intacto-durante-horas-3.png",
            descripcion: "Labial Dúo Mate Profesional Trendy, diseñado para ofrecer color intenso y un acabado mate de larga duración. Su presentación dúo permite lograr unos labios definidos y con un look profesional, manteniendo una sensación cómoda ideal para el uso diario o maquillajes más elaborados. 💄✨  Contenido: 5 ml+ 5 ml"
        },
        {
            id: 1782950669662,
            nombre: "Lip gloss x3 brillos Bloom to shine Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-iluminador-16.jpg",
            descripcion: "Set de 3 Glosses (3 x 10 g = 30 g total)  Acabado brillante y jugoso sin sensación pegajosa.  Tonos variados para usar según el mood o look.  Fórmula hidratante que deja los labios suaves y nutridos.  Perfecto para combinar, regalar o llevar a todos lados."
        },
        {
            id: 1782951349721,
            nombre: "Labial brillo boutique voluminizador Trendy",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Labial-brillo-boutique-Trendy-.png",
            descripcion: "El Labial Brillo Boutique Voluminizador Trendy es un gloss de alto brillo diseñado para aportar efecto volumen inmediato y un acabado jugoso irresistible.  RECIBES TONO AL AZAR (todos son traslucidos)  Contenido: 2,5 ml."
        },
        {
            id: 1782951644529,
            nombre: "Kit de lapiz y labial barra Rapunzel Trendy",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Kit-de-lapiz-y-labial-barra-Rapunzel-Trendy-.png",
            descripcion: "Define y da color a tus labios fácilmente con el Kit de Lápiz y Labial en Barra Rapunzel de Trendy. Este práctico dúo combina un lápiz delineador y un labial en barra para lograr labios más definidos, uniformes y con un acabado suave y elegante.  Contenido: 1 lapiz y 1 labial en barra"
        },
        {
            id: 1782953051475,
            nombre: "Lapiz delineador de labios jumbo cupcake Trendy",
            precio: 6000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-17.png",
            descripcion: "Define tus labios con elegancia y precisión. PESO / CONTENIDO 2.8 g  El lápiz delineador de labios Trendy en tonos nude es perfecto para perfilar, rellenar y lograr un acabado natural o glam según tu estilo. Su fórmula cremosa de larga duración se desliza suavemente, no reseca y se mantiene intacta por horas."
        },
        {
            id: 1782953691733,
            nombre: "Labial doble (mate y brillante) vaquero Toy Story Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Labial-doble-mate-y-brillante-vaquero-Toy-Story-Trendy-tono-01-1.png",
            descripcion: "Labial Doble Vaquero Toy Story Trendy  Dos acabados en un solo producto: mate de alta pigmentación y brillante.  Inspirado en el estilo vaquero de Toy Story.  Perfecto para crear diferentes looks según la ocasión."
        },
        {
            id: 1783453159335,
            nombre: "Glow fusion boom gloss Montoc",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/kit-crema-corporal-splash-2025-01-29T174823.771.png",
            descripcion: "Gloss Glow Fusion Boom Montoc (10 ml)  Brillo intenso y efecto radiante con acabado brillante y espectacular.  Hidrata y cuida los labios con un toque de color sutil.  Complemento perfecto para cualquier look, de natural a glamoroso."
        },
        {
            id: 1783454031460,
            nombre: "Lippie Cheeks tinta rubor Montoc",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/04/Materiales-de-alta-calidad-que-aseguran-una-larga-vida-util-de-la-brocha.-20.png",
            descripcion: "Lippie Cheeks Montoc – Tinta Líquida Profesional para Labios y Mejillas | Kroma Space (3.5 g)  Textura líquida ultra ligera y de rápida absorción.  Color modulable de larga duración.  Acabado jugoso y natural, sin parches.  Perfecta para todo tipo de piel."
        },
        {
            id: 1783456072503,
            nombre: "Lapiz delineador de labios Montoc",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/kit-crema-corporal-splash-2025-01-29T180813.382.png",
            descripcion: "Lápiz de Labios Mate Montoc (1.2 g)  Alta pigmentación con acabado mate impecable.  Textura suave y de larga duración que mantiene el look intacto todo el día.  Color vibrante y elegante, ideal para resaltar la belleza natural de los labios."
        },
        {
            id: 1783457259720,
            nombre: "Cora Lip Gloss Acido Hialurónico Montoc",
            precio: 27000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/kit-crema-corporal-splash-2025-01-29T180201.883.png",
            descripcion: "Labial Cora Lip con Ácido Hialurónico Montoc (2.6 g)  Color intenso y duradero con los beneficios del ácido hialurónico.  Hidrata y suaviza los labios al instante.  Acabado suave y volumen natural, labios perfectamente definidos."
        },
        {
            id: 1783457377463,
            nombre: "Labial hidratante click gloss Pro Montoc",
            precio: 24000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-84.png",
            descripcion: "Peso / Contenido: 4g  Beneficios: ✔️ Hidrata y suaviza los labios. ✔️ Brillo intenso sin sensación pegajosa. ✔️ Textura ligera y confortable. ✔️ Aporta color con acabado natural y jugoso. ✔️ Ideal para uso diario."
        },
        {
            id: 1783459647049,
            nombre: "Gloss Click Gloss Bloomshell TONO : Irresistible",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/12/gloss-irresistible-click-bloomshell-1.jpg",
            descripcion: "Beneficios: ✔️ Hidrata y suaviza los labios. ✔️ Brillo intenso sin sensación pegajosa. ✔️ Textura ligera y confortable. ✔️ Aporta color con acabado natural y jugoso. ✔️ Ideal para uso diario.  Peso / Contenido : 5 ml"
        },
        {
            id: 1783459961282,
            nombre: "Gloss Click Gloss Bloomshell Tono: Elegance",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/12/brillo-gloss-labial-hidratante-3.jpg",
            descripcion: "Gloss Click Gloss Bloomshell (2 g)  Brillo radiante con hidratación ligera y fórmula no pegajosa.  Deja los labios suaves, jugosos y con acabado fresco.  Ideal para resaltar tu look en segundos."
        },
        {
            id: 1783460123448,
            nombre: "Labial hidratante Bloomshell Sparkle kiss",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/02/BG-Labial-hidratante-Bloomshell-Sparkle-kiss-1.png",
            descripcion: "El Labial Hidratante Bloomshell Sparkle Kiss combina color radiante con partículas sutiles de brillo para lograr un acabado luminoso y sofisticado.  Contenido: 4 gr."
        },
        {
            id: 1783460542448,
            nombre: "Tinta Bloom Lush petan Bloomshell llavero",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/02/BC-Tinta-Bloom-Lush-petan-Bloomshell-llavero.png",
            descripcion: "La Tinta Bloom Lush Petan Bloomshell Llavero es un labial líquido de acabado ligero y modulable, diseñado para aportar color vibrante con efecto natural.  Contenido: 5 ml."
        },
        {
            id: 1783460973683,
            nombre: "Set gloss bloom duo Bloomshell",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/10/Formato-PW-no-usar-30.png",
            descripcion: "Hidrata, repara y embellece tus labios con el irresistible Set Gloss Lush Bloom de Bloomshell, una barra nutritiva con manteca de cacao y un gloss dúo cromático que realza tus labios con un brillo radiante y una hidratación duradera.  Peso / Contenido : 7.4G+4.2G"
        },
        {
            id: 1783461174465,
            nombre: "Brillo Lip Oil Mimosa Bloomshell",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/08/Brillo-hidratante-Lip-oil-Mimosa-Bloomshell-con-aplicador-Jumbo-2.png",
            descripcion: "Dale a tus labios el cuidado que merecen con el Brillo Lip Oil Mimosa Bloomshell, un tratamiento nutritivo que aporta brillo y suavidad. Su fórmula enriquecida con aceites esenciales repara, hidrata y protege, dejando los labios jugosos y saludables durante todo el día.  Peso / Contenido : 3,3 g"
        },
        {
            id: 1783461258584,
            nombre: "Kit de labios Lip Kip Bloomshell",
            precio: 22900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/Formato-pw-NO-USAR-47.png",
            descripcion: "Descubre el Kit de Labios Lip Kit Bloomshell, el set ideal para lograr unos labios definidos, jugosos y perfectamente hidratados en cualquier ocasión. Este kit combina lo esencial para perfilar, dar color y aportar brillo, todo en un solo pack práctico y versátil. 💄✨  Peso / Contenido : Gloss : 4 ml Tinta : 2.5 ml Lapiz : 3 g"
        },
        {
            id: 1783461739485,
            nombre: "Gloss XL Bloom sublime Bloomshell",
            precio: 24000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/02/BA-Gloss-XL-Bloom-sublime-Bloomshell-.png",
            descripcion: "El Gloss XL Bloom Sublime Bloomshell es un brillo labial diseñado para aportar volumen visual, efecto espejo y un acabado ultra luminoso.  Contenido: 15 ml."
        },
        {
            id: 1783467102109,
            nombre: "Gloss mágico Bloom crush Bloomshell",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/09/solo-K-prohibido-Lau-xD-15.png",
            descripcion: "El Gloss mágico Bloom crush Bloomshell Es ideal para darle color y definición a tus labios, te dará un aspecto jugoso y un color único, ya que aporta color a tus labios dependiendo el PH, su textura única garantiza una pigmentación duradera.  Peso / Contenido : 4 ml"
        },
        {
            id: 1783467209496,
            nombre: "Lip gloss Color Bloom Glow Bloomshell",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/BA-Lip-gloss-Color-Bloom-Glow-Bloomshell.png",
            descripcion: "Gloss Hidratante Bloomshell (6 ml)  Brillo deslumbrante con fórmula que hidrata y nutre los labios.  Deja los labios suaves, radiantes y cuidados.  Aplicador jumbo para una aplicación fácil, rápida y precisa."
        },
        {
            id: 1783468180378,
            nombre: "Brillo bloom pop portátil Bloomshell",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/07/Brillo-bloom-pop-portatil-Bloomshell-.png",
            descripcion: "Brillo Bloom Pop Portátil Bloomshell  Diseño portátil con accesorio para colgar en celular, bolso o llavero.  Fórmula hidratante con ácido hialurónico que mantiene labios suaves y cómodos.  Acabado brillante tipo gloss, ideal para retocar en cualquier momento."
        },
        {
            id: 1783468821510,
            nombre: "Voluminizador de Labios con color Bloomshell",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/lip-gloss-voluminizer-bloomshell-1.jpg",
            descripcion: "Voluminizador de Labios con Color Bloomshell (5 ml)  Aumenta el volumen de los labios, mejorando tu sonrisa.  Fórmula hidratante que evita sequedad y agrietamiento.  Aporta color vibrante, realzando tu belleza natural en cada aplicación."
        },
        {
            id: 1783469170761,
            nombre: "Gloss + espejo Bloom Mocha llavero Bloomshell",
            precio: 28000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/07/Gloss-espejo-Bloom-llavero-Bloomshell-Tono-mocha.png",
            descripcion: "Lleva el brillo perfecto a todas partes con el Gloss + Espejo Bloom Llavero Bloomshell. Este práctico accesorio combina un gloss hidratante y un espejo integrado en un diseño compacto tipo llavero, ideal para llevar en el bolso, mochila o llaves y realizar retoques en cualquier momento del día."
        },
        {
            id: 1783470177651,
            nombre: "Lip Bloomlove Bálsamo Labios con Color BLOOMSHELL",
            precio: 14000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/lip-gloss-bloomlove-bloomshell-1.jpg",
            descripcion: "Lip Bloomlove Bálsamo Labios Bloomshell (2.8 g)  Hidratación intensiva que mantiene los labios suaves y nutridos.  Color vibrante y natural que realza la belleza de los labios.  Fórmula ligera, aplicación cómoda y sin pegajosidad."
        },
        {
            id: 1783470258594,
            nombre: "duo mimosa + mini shell tint llavero lacito Bloomshell",
            precio: 26000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/Formato-PW-no-usar-3.png",
            descripcion: "Descubre el duo mimosa + mini shell tint llavero lacito Bloomshell, un set encantador y práctico que combina color, brillo y estilo en un solo combo. Ideal para llevar a todas partes, este dúo realza tus labios con un acabado fresco y juvenil, mientras el llavero añade un toque cute y funcional a tu bolso o cosmetiquera. 💄🎀✨  Peso / Contenido : 5 ml"
        },
        {
            id: 1783470320443,
            nombre: "duo shell tint + mini mimosa llavero lacito Bloomshell",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/Formato-PW-no-usar-5.png",
            descripcion: "Descubre el Duo Shell Tint + Mini Mimosa Gloss + Llavero Lacito Bloomshell, un set encantador y práctico que combina color, brillo y estilo en un solo combo. Ideal para llevar a todas partes, este dúo realza tus labios con un acabado fresco y juvenil, mientras el llavero añade un toque cute y funcional a tu bolso o cosmetiquera. 💄🎀✨  Peso / Contenido : 11 g"
        },
        {
            id: 1783470761760,
            nombre: "Bálsamo Hidratante de Labios Bloom Kiss Bloomshell",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/07/kit-crema-corporal-splash-2025-02-12T161726.543.png",
            descripcion: "Bálsamo hidratante reparador de labios  Aroma delicioso que nutre y protege tus labios 4 tonos disponibles para que elijas tu favorito Peso: 15 ml"
        },
        {
            id: 1783470936641,
            nombre: "Bálsamo de labios candy shell Miau",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/06/solo-K-NO-USAR-2025-06-09T113402.663.png",
            descripcion: "Descubre el poder de la magia en tus labios con el Bálsamo Mágico de Bloomshell. Este bálsamo inteligente reacciona al pH natural de tu piel para revelar un tono de color personalizado, mientras hidrata y suaviza intensamente. Perfecto para un look natural, jugoso y saludable todo el día.  Contenido: 3,4 gr ."
        },
        {
            id: 1783471000503,
            nombre: "Lip Oil reparador Coconut Bloosmhell",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/Formato-pw-NO-USAR-41.png",
            descripcion: "Hidrata, nutre y embellece tus labios con el Lip Oil, un aceite ligero con acabado brillante que les aporta suavidad y un aspecto jugoso al instante. Su fórmula enriquecida con aceites naturales ayuda a mantener la hidratación durante todo el día mientras realza el tono natural de tus labios con un brillo sutil y elegante.  Contenido: 5 ml"
        },
        {
            id: 1783471139911,
            nombre: "Bálsamo reparador de Labios Rehab Blomshell",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/08/M99.1.jpg",
            descripcion: "Repara Labios Agrietados: El Bálsamo Reparador de Labios Bloomshell restaura y suaviza labios secos y dañados. Alivio Inmediato: El Bálsamo Bloomshell ofrece un alivio instantáneo para labios resecos. Fórmula Nutritiva: El Bálsamo Reparador Bloomshell nut"
        }
    ],
    ojos: [
        {
            id: 32,
            nombre: "Paleta Sombras x90 Tonos Via Letvass",
            precio: 55000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Formato-PW-no-usar-17.png",
            descripcion: "Versátil con tonos pigmentados y fácil difuminado. Acabados mate, satinados y brillantes. Contenido: 103,2 gr."
        },
        {
            id: 33,
            nombre: "Sombras Brillantes Circus Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/cookies-2-4.png",
            descripcion: "Tonos vibrantes y brillantes para looks llamativos. Fórmula pigmentada con acabado luminoso. Contenido: 10 g."
        },
        {
            id: 34,
            nombre: "Sombras Brillantes Trendy Safari",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/0-2024-05-28T143513.915.png",
            descripcion: "Colores intensos en texturas satinadas, ideales para looks impactantes. Fácil de difuminar. Contenido: 5.4 g."
        },
        {
            id: 35,
            nombre: "Paleta Sombras Pequeña Boss Babe Purpure",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/10/PALETA-12-TONOS-.png",
            descripcion: "Tonos mate, satinados y shimmer para looks naturales y sofisticados. Alta pigmentación y textura sedosa. Contenido: 7 gr."
        },
        {
            id: 36,
            nombre: "Paleta Sombras Grande Boss Babe Purpure x48",
            precio: 40000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/02/PALETA-BOSS.png",
            descripcion: "48 tonos de alta pigmentación con acabados mate, satinados y shimmer. Fácil difuminado y duradero. Contenido: 72 gr."
        },
        {
            id: 37,
            nombre: "Paleta Sombras Nude Terra Trendy",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/12/kit-crema-corporal-splash-2025-02-09T080207.059.png",
            descripcion: "Tonos tierra y cálidos para looks naturales y sofisticados. Versátil para día y noche con acabados suaves y definidos. Contenido: 10 gr."
        },
        {
            id: 38,
            nombre: "Paleta Sombras Dream Pro Trendy",
            precio: 50000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/01/Paleta-de-sombras-huda-nude-4.png",
            descripcion: "Set profesional con paleta versátil para looks sofisticados. Pigmentación de alta calidad y acabados impecables. Contenido: 38,4 gr."
        },
        {
            id: 39,
            nombre: "Paleta Sombras Nude Profesional",
            precio: 14000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/iluminador-x2-2-1.png",
            descripcion: "Tonos nude versátiles ideales para looks naturales o ahumados. Alta pigmentación con aplicación uniforme y duradera. Contenido: 5 gr."
        },
        {
            id: 40,
            nombre: "Paleta Sombras Novias Classic Atenea",
            precio: 95000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/paleta-sombras-classic-atenea-profesional-3.jpg",
            descripcion: "Alta pigmentación con tonos elegantes para novias. Larga duración impecable todo el día. Contenido: 45.5 gr."
        },
        {
            id: 41,
            nombre: "Paleta Storytime Atenea Profesional",
            precio: 115000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/04/polvo-matificante-49.png",
            descripcion: "18 tonos mates y satinados + rubor, iluminador, bronzer y contorno. Perfecta para looks naturales o muy glam. Contenido: 47 gr."
        },
        {
            id: 42,
            nombre: "Paleta Sombras Art Deco Atenea",
            precio: 58000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/0-2024-05-29T131801.645.png",
            descripcion: "Arte, color y elegancia en una paleta. Tonos sofisticados para looks únicos. Contenido: 42 gr."
        },
        {
            id: 1782253186283,
            nombre: "Gel fijador de cejas Kaba",
            precio: 29000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-gel-cejas.jpg",
            descripcion: "Gel Fijador de Cejas Kaba Cejas definidas y en su lugar todo el día 💁‍♀️✨  Peso / Contenido: 10 gr  💫 Ideal para looks naturales o laminados con acabado profesional  🌟 Beneficios que amarás: 🖌️ Cepillo preciso que peina y define sin esfuerzo 💎 Fórmula transparente que no deja residuos ni sensación dura ⏰ Fijación duradera para mantener cada pelito en su lugar"
        },
        {
            id: 1782263642460,
            nombre: "Paleta face palette pocion de magia Miis cosmetics",
            precio: 36900,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/04/Paleta-face-palette-pocion-fatasia-Miis-cosmetics.png",
            descripcion: "La Face Palette Poción Fantasía de Miis Cosmetics es una paleta multifuncional diseñada para maquillaje completo del rostro.  Contenido: 18 gr."
        },
        {
            id: 1782778458630,
            nombre: "Delineador Trendy en gel a prueba de agua",
            precio: 13000,
            imagen: "https://kromaspace.com/wp-content/uploads/2022/12/Delineador-Trendy-en-gel-a-prueba-de-agua-Ng.png",
            descripcion: "Delineador en gel a prueba de agua Trendy  Contenido: 1,5 gr."
        },
        {
            id: 1782779937837,
            nombre: "Paleta de sombras Trendy blossom",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/05/Paleta-de-sombras-Puppie-Colection-Trendy-27.png",
            descripcion: "Paleta de Sombras / Maquillaje (6.2 g)  Incluye tonos vibrantes y neutros, ideales para looks diarios y festivos.  Alta pigmentación para un acabado uniforme y duradero."
        },
        {
            id: 1782780756584,
            nombre: "pestañina cat Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2022/07/Diseno-sin-titulo-77.png",
            descripcion: "Pestañina Cat Trendy (15 ml)  Alarga, levanta y da volumen a las pestañas desde la raíz.  Cepillo curvo y fórmula intensa para un acabado definido, sin grumos y de larga duración.  Ideal para un look seductor y atrevido (efecto felino). 🐱✨"
        },
        {
            id: 1782781292455,
            nombre: "Coctel de cejas Trendy",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2022/06/betun-sombras-para-cejas-cocktail-trendy.jpg",
            descripcion: "Kit de betún + sombras Trendy  Un tono universal que queda perfecto con cualquier tono de piel Es de larga duración y su textura es suave y fácil de aplicar Incluye brocha para poder aplicar el productos CONTENIDO NETO: Polvo: 3g/Crema: 4g"
        },
        {
            id: 1782781602138,
            nombre: "Pestañina Boom Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2022/07/Diseno-sin-titulo-74.png",
            descripcion: "Pestañina Boom Trendy (15 ml)  Aporta volumen, definición y longitud extrema desde la primera pasada.  Fórmula ligera y cepillo de precisión que separa sin grumos.  Acabado intenso y profesional para una mirada impactante. 💣✨"
        },
        {
            id: 1782782313202,
            nombre: "pestañina poodle Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2022/07/Diseno-sin-titulo-76.png",
            descripcion: "Contenido: 15 ml  Aporta volumen y definición a las pestañas.  Fórmula resistente a grumos y de larga d"
        },
        {
            id: 1782783653036,
            nombre: "Pestañina Fortalecedora Trendy 14 ml",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/10/pestanina-fresh-trendy-1.jpg",
            descripcion: "Pestañina Fortalecedora Trendy (14 ml)  Previene la rotura, manteniendo las pestañas fuertes y saludables.  Proporciona alargamiento visible para pestañas más largas y atractivas.  Enriquecida con ingredientes nutritivos que mejoran su apariencia, haciéndolas lucir más abundantes."
        },
        {
            id: 1782783892651,
            nombre: "Pestañina fortalecedora Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/Formato-PW-no-usar-15.png",
            descripcion: "Pestañina Fortalecedora Trendy Transparente (15 ml)  Cuida, fortalece y define las pestañas de forma natural.  Fórmula ligera y transparente que acondiciona, ordena y aporta brillo sin color.  Perfecta para usar sola o como base antes de la pestañina. ✨👁️"
        },
        {
            id: 1782926476635,
            nombre: "Lapiz delineador de cejas 2 en 1 Trendy toy story",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Lapiz-delineador-de-cejas-2-en-1-Trendy-toy-story.png",
            descripcion: "Lápiz Delineador de Cejas 2 en 1 Trendy Toy Story  Delineador y sombra en un solo producto para cejas perfectas.  Inspirado en Toy Story, ideal para fans de la película.  Fácil de aplicar con acabado natural y definido."
        }
    ],
    rostro: [
        {
            id: 43,
            nombre: "Rubor Profesional Montoc Nostalgic",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/nostalgic-blush-montoc-1.jpg",
            descripcion: "Acabado natural, larga duración. Tono cálido y versátil. Peso: 4.5 gr."
        },
        {
            id: 44,
            nombre: "Iluminador High Light Bloom",
            precio: 22000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/Iluminador-High-Light-Bloom-Glow-Bloomshel-Tono-1-33.webp",
            descripcion: "Brillo intenso y natural. Efecto glow en pómulos. Contenido: 8 gr."
        },
        {
            id: 45,
            nombre: "Paleta Grande Bronzer Rubor Iluminador",
            precio: 45000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/08/Formato-PW-no-usar-2025-08-26T163937.830.png",
            descripcion: "Todo en uno: bronzer, rubor e iluminador. Tonos versátiles para contorno. Contenido: 25 gr."
        }
    ],
    "skincare-facial": [
        {
            id: 1782256328324,
            nombre: "Limpiador facial en espuma La Poción",
            precio: 46000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/limpiador-facial-espuma-pocion-1.jpg",
            descripcion: "Limpiador Facial en Espuma La Poción (150 ml) Limpieza profunda que elimina impurezas sin resecar. Hidrata y suaviza, dejando la piel fresca y confortable. Ideal para uso diario en todo tipo de piel."
        },
        {
            id: 1782256436476,
            nombre: "Tónico hidratante La Poción",
            precio: 46000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/tonico-hidratante-pocion-1.jpg",
            descripcion: "Tónico Hidratante La Poción (200 ml) Restaura el equilibrio natural de la piel después de la limpieza. Hidrata y refresca, preparando la piel para los siguientes pasos de la rutina. Aporta suavidad y confort inmediato."
        },
        {
            id: 1782256536379,
            nombre: "Serum hidratante La Poción",
            precio: 58000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/serum-hidratante-pocion-1.jpg",
            descripcion: "Serum Hidratante La Poción (30 ml) Hidratación profunda y duradera para todo tipo de piel. Fórmula ligera de rápida absorción que deja la piel suave y radiante. Mejora la textura y apariencia general de la piel."
        },
        {
            id: 1782256639268,
            nombre: "Protector solar alta protección Girly",
            precio: 42000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/AK-Protector-solar-alta-proteccion-Girly-1.png",
            descripcion: "Protector Solar Alta Protección Girly SPF50+ (50 ml) Protección UVA/UVB de amplio espectro contra rayos solares. Fórmula ligera y no grasa que se absorbe rápidamente. Ideal para uso diario, deja la piel protegida y sin sensación pegajosa."
        },
        {
            id: 1782256738799,
            nombre: "Mascarilla facial hidratante La Poción",
            precio: 46000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/mascarilla-facial-hidratante-pocion-1.jpg",
            descripcion: "Mascarilla Facial Hidratante La Poción (100 g) Hidratación intensiva que restaura la suavidad de la piel. Nutre y repara, dejando la piel radiante y rejuvenecida. Ideal para tratamiento semanal de hidratación profunda."
        },
        {
            id: 1782256839176,
            nombre: "Exfoliante facial La Poción",
            precio: 46000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/exfoliante-facial-pocion-1.jpg",
            descripcion: "Exfoliante Facial La Poción (100 g) Elimina células muertas e impurezas suavemente. Renueva la textura de la piel, dejándola suave y luminosa. Estimula la renovación celular para un cutis más fresco y saludable."
        },
        {
            id: 1782256939506,
            nombre: "Crema hidratante día La Poción",
            precio: 58000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/crema-hidratante-dia-pocion-1.jpg",
            descripcion: "Crema Hidratante Día La Poción (50 g) Hidratación duradera que protege la piel durante el día. Fórmula ligera que se absorbe rápidamente sin dejar residuos. Deja la piel suave, fresca y con aspecto saludable."
        },
        {
            id: 1782257039642,
            nombre: "Crema hidratante noche La Poción",
            precio: 58000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/crema-hidratante-noche-pocion-1.jpg",
            descripcion: "Crema Hidratante Noche La Poción (50 g) Hidratación profunda que repara la piel mientras duermes. Fórmula nutritiva que restaura y rejuvenece, dejando la piel suave y radiante al despertar."
        },
        {
            id: 1782257239892,
            nombre: "Kit rutina facial completa La Poción",
            precio: 320000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/kit-rutina-facial-pocion-1.jpg",
            descripcion: "Kit Rutina Facial Completa La Poción Incluye todos los productos esenciales para una rutina facial completa. Limpieza, tonificación, hidratación y protección en un solo kit. Ideal para principiantes o quienes buscan simplificar su rutina."
        },
    ],
    "skincare-corporal": [
        {
            id: 1781999404141,
            nombre: "Espuma autobronceadora Kaba D'Luchi",
            precio: 69000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-iluminador-11.jpg",
            descripcion: "Peso / Contenido: 150 ml Beneficios:  Bronceado uniforme y natural.  Fórmula ligera de rápida absorción.  Hidrata y suaviza la piel.  No mancha la ropa ni deja sensación pegajosa.  Ideal para todo tipo de piel."
        },
        {
            id: 1782001326691,
            nombre: "Mantequilla Corporal Hidratante con glitter Click Hair",
            precio: 58000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-2025-07-14T074215.470.png",
            descripcion: "Mantequilla Corporal Hidratante con Glitter Click Hair – Piel suave, luminosa y con efecto glow Peso / Contenido: 250 ml  Hidratación intensa y duradera  Efecto glow con brillo fino y sofisticado  Aroma delicioso que perdura en la piel  Textura rica pero de rápida absorción  Ideal para todo tipo de piel"
        },
        {
            id: 1782002629568,
            nombre: "Aceite Hidratante corporal Girly",
            precio: 40000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-light-54.png",
            descripcion: "Aceite corporal hidratante Girly – Nutrición intensa y brillo saludable para tu piel Peso / Contenido: 120 ml  Hidratación profunda de larga duración  Textura ligera que se absorbe fácilmente  Ideal para piel seca o deshidratada  Deja la piel suave, radiante y con un toque perfumado"
        },
        {
            id: 1782003573598,
            nombre: "Mantequilla corporal hidratante Girly",
            precio: 36000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-light-52.png",
            descripcion: "Mantequilla corporal hidratante Girly – Nutrición intensa para una piel suave y radiante Peso / Contenido: 140 g  Textura cremosa y ultra nutritiva  Fragancia delicada y duradera  Hidrata, suaviza y mejora la elasticidad de la piel  Perfecta para uso diario en todo el cuerpo"
        },
        {
            id: 1782003687840,
            nombre: "Bronceador de Chocolate y Miel KABA",
            precio: 59000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-46.png",
            descripcion: "Peso / Contenido: 200 ml Beneficios:  Favorece un bronceado más rápido y uniforme.  Nutre e hidrata la piel gracias a la miel.  Aroma delicioso y agradable al aplicarlo.  Textura ligera y fácil de esparcir.  Aporta un acabado luminoso y saludable."
        },
        {
            id: 1782003784697,
            nombre: "Mini mantequilla Glow seduction con destellos",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-30.png",
            descripcion: "Piel suave, luminosa y con un brillo irresistible. La mantequilla corporal con destellos Orea es perfecta para hidratar profundamente la piel mientras le da un toque sutil de luminosidad. Su fórmula rica y cremosa nutre intensamente, dejando la piel suave, radiante y perfumada durante todo el día. Contenido: 50 gr."
        },
        {
            id: 1782250671780,
            nombre: "Exfoliante Corporal Click Hair x200 ml",
            precio: 59000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/09/pw-no-usar-8.png",
            descripcion: "Dale a tu piel un cuidado renovador con el Exfoliante Corporal Click Hair, formulado para eliminar células muertas, suavizar y dejar tu piel fresca, lisa y con un aroma delicioso. Ideal para mantener la piel saludable y preparada para absorber mejor la hidratación.  Peso/ Contenido: 200 ml"
        },
        {
            id: 1782250783150,
            nombre: "Jabón cremoso de Rosas Click hair x250 ml",
            precio: 48000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/09/pw-no-usar-9.png",
            descripcion: "Disfruta de una limpieza delicada y un aroma encantador con el Jabón Cremoso de Rosas Click Hair. Su fórmula suave limpia profundamente sin resecar, dejando tu piel fresca, hidratada y con una fragancia floral irresistible.  Peso / Contenido: 250 ml"
        },
        {
            id: 1782252533797,
            nombre: "Regenerador de Almendras KABA post-bronceado",
            precio: 22000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/regenerador-almendras-dluchi.jpg",
            descripcion: "Regenerador de Almendras KABA Post-Bronceado (120 ml)  Hidrata en profundidad y previene la sequedad tras la exposición solar.  Repara la piel rápidamente, mejorando su textura después del bronceado.  Prolonga el bronceado y realza el brillo natural de la piel."
        },
        {
            id: 1782255420292,
            nombre: "Bronceador Ritual de sol Ritual botánico",
            precio: 35000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/10/Formato-PW-no-usar-37.png",
            descripcion: "Ilumina tu piel con un brillo dorado y natural con el Bronceador Ritual de Sol de Ritual Botánico, formulado para aportar un tono cálido y radiante mientras cuida tu piel con ingredientes botánicos. 🌿✨ Su textura sedosa se difumina fácilmente, dejando un acabado luminoso, saludable y de aspecto natural.  Peso / Contenido : 240 ml"
        },
        {
            id: 1782256460219,
            nombre: "Mantequilla perfumada con feromonas Ritual Botánico",
            precio: 27000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/04/Materiales-de-alta-calidad-que-aseguran-una-larga-vida-util-de-la-brocha.-10.png",
            descripcion: "Mantequilla Corporal con Feromonas Ritual Botánico (240 ml)  Nutre e hidrata la piel en profundidad, dejándola suave y radiante.  Aroma envolvente y duradero con feromonas que potencia el atractivo natural.  Fórmula rica en humectantes que mantiene la luminosidad por horas."
        },
        {
            id: 1782260382460,
            nombre: "Crema hidratante corporal Milagros",
            precio: 37900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/03/Beauty-blender-cleo-terciopelo-pomo-facial-17.png",
            descripcion: "Consiente tu piel con la Crema Hidratante Corporal Milagros, una fórmula especialmente diseñada para nutrir, suavizar e hidratar en profundidad. Su textura ligera se absorbe fácilmente sin dejar sensación grasosa, aportando frescura y un aroma agradable que acompaña tu día.  Peso / Contenido: 1 L"
        },
        {
            id: 1782260519157,
            nombre: "Serum hidratante corporal Milagros",
            precio: 45900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-1.png",
            descripcion: "Sérum Corporal Milagros (120 ml)  Hidratación profunda con fórmula ligera de rápida absorción.  Rico en activos naturales, nutre, suaviza y aporta luminosidad.  Restaura la barrera cutánea, mejora la elasticidad y deja efecto satinado sin grasa.  Ideal para todo tipo de piel, incluso sensibles. Perfecto post-baño o antes de dormir."
        },
        {
            id: 1782949391337,
            nombre: "Mantequilla corporal hidratante Trendy",
            precio: 28000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/02/AMM-Mantequilla-corporal-hidratante-Trendy-1.png",
            descripcion: "La Mantequilla Corporal Hidratante Trendy FRESH Aguamarina está formulada para brindar hidratación intensa y duradera a la piel, dejándola suave, nutrida y con una sensación fresca.  Contenido 200 gr."
        },
        {
            id: 1782949774420,
            nombre: "Exfoliante corporal Stich Disney Trendy",
            precio: 25900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/exfoliante-corporal-stich-2.jpg",
            descripcion: "Exfoliante Corporal Stitch Disney Trendy (450 g)  Elimina impurezas y células muertas, dejando la piel suave.  Estimula la regeneración celular para una piel más radiante.  Fragancia chicle mentada que aporta un toque fresco y duradero."
        },
        {
            id: 1782950820825,
            nombre: "Kti corporal Splash y crema Perfect Trendy",
            precio: 15900,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Kti-corporal-Splash-y-crema-Perfect-Trendy-summer-1.png",
            descripcion: "Kit Corporal Splash y Crema Perfect Trendy  Disfruta una rutina completa de hidratación y fragancia con el Kit Corporal Splash y Crema Perfect de Trendy. Este práctico dúo combina una crema corporal hidratante y un splash perfumado que ayudan a dejar la piel suave, fresca y deliciosamente perfumada durante el día.  Contenido. 1 splash + 1 crema corporal"
        },
        {
            id: 1782951936866,
            nombre: "Crema Hidratante para manos con Rosas Trendy",
            precio: 10000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/02/Crema-para-manos-hidratante-Trendy-.png",
            descripcion: "Crema hidratante para Manos con extracto de rosas Antiedad  Contenido: 50 gr."
        },
        {
            id: 1783974626888,
            nombre: "Mantequilla corporal hidratante Girly",
            precio: 36000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-light-52.png",
            descripcion: "Mantequilla Corporal Hidratante Girly (140 g)  Textura cremosa y ultra nutritiva.  Fragancia delicada y duradera.  Hidrata, suaviza y mejora la elasticidad de la piel.  Perfecta para uso diario en todo el cuerpo."
        },
        {
            id: 1783974910502,
            nombre: "Kit rutina Corporal girly",
            precio: 100000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Kit-rutina-Corporal-Girly-ducha-mantequilla-aceite.jpg",
            descripcion: "El Kit de Rutina Corporal Girly es un combo completo diseñado para limpiar, hidratar y nutrir la piel en tres pasos esenciales.  Contenido: 1 Jabon corporal (500 gr) + 1 Mantequilla (140 gr) +1 aceite regenerador (100 ml)"
        },
    ],
    "capilar-la-pocion": [
        {
            id: 1782262781075,
            nombre: "Spray capilar pro-reconstructor La POCIÓN",
            precio: 65000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/03/polvos-sueltos-98.png",
            descripcion: "RATAMIENTO CONTRUCTOR INTENSIVO  Peso/Contenido: 100 ml  Producto diseñado especialmente para cabellos ultraprocesados y maltratados quimicamente  Efecto molecular que repara tu cabello al instante 29% más brillo intenso 89% más fuerza en la hebra capilar 92% reparación efectiva contra cabellos resecos y maltratados"
        },
        {
            id: 1783615439259,
            nombre: "Crema para peinar Leave on Tongolé LA POCIÓN",
            precio: 36900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/crema-peinar-tongole-pocion-1.jpg",
            descripcion: "Crema para Peinar Leave On La Poción (450 ml) Facilita el peinado desenredando sin esfuerzo. Controla el frizz, incluso en alta humedad. Aporta hidratación intensa y mejora el brillo y la apariencia general."
        },
        {
            id: 1783615487967,
            nombre: "Spray desenredante Antinudos Kids La poción",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/08/spray-kids.png",
            descripcion: "Desenreda al instante sin tirones ni lágrimas. Ideal para el cabello delicado de los niños. 💫  PESO: 250 ML  🌿 Beneficios:  Facilita el peinado sin jalones Ideal para uso diario Agradable aroma infantil Apto para todo tipo de cabello infantil"
        },
        {
            id: 1783615538346,
            nombre: "Tónico anticaída crecimiento acelerado La Poción DUTONIC",
            precio: 58900,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/12/2-3-4-36.png",
            descripcion: "Tónico Anticaída La Poción (Día y Noche) Tratamiento completo con 2 fórmulas complementarias: una para el día y otra para la noche. Con extractos naturales que nutren el cuero cabelludo, frenan la caída y activan el crecimiento de nuevos cabellos. Deja la melena más fuerte, densa y saludable."
        },
        {
            id: 1783615624566,
            nombre: "Ultra acondicionador Sport ultra La poción",
            precio: 46000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-28.png",
            descripcion: "Protector Capilar Acondicionador La Poción (250 ml) Ideal para deportistas y personas activas expuestas al sol. Fórmula ligera que protege contra rayos UV y evita la resequedad. Mantiene el cabello hidratado, suave y con brillo natural incluso tras entrenamientos al aire libre."
        },
        {
            id: 1783616045111,
            nombre: "Shampoo + Tónico control caspa La poción",
            precio: 82000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Lip-oil-hidratante-RubyRose-33.png",
            descripcion: "Shampoo + Tónico Control Caspa La Poción, dúo diseñado para brindar una rutina completa que ayuda a controlar la caspa, equilibrar el cuero cabelludo y mantener el cabello limpio y fresco. Su combinación permite una limpieza profunda junto con un tratamiento continuo sin enjuague. ✨🌿  Peso: 450 ml (shampoo) – 70 ml (tónico)"
        },
        {
            id: 1783616114402,
            nombre: "Gel definidor de Rizos Tongolé La poción",
            precio: 43900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-27.png",
            descripcion: "Peso / Contenido : 500 ml  Beneficios: ✔️ Define y moldea rizos de manera natural. ✔️ Aporta hidratación y brillo sin dejar sensación pegajosa. ✔️ Controla el frizz y mejora la elasticidad del cabello. ✔️ Fijación flexible y de larga duración. ✔️ Ideal para cabellos rizados, ondulados y afro."
        },
        {
            id: 1783616259560,
            nombre: "Acondicionador control caspa La poción",
            precio: 41900,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Acondicionador-control-caspa-La-pocion-.png",
            descripcion: "Complementa tu rutina capilar con el Acondicionador Control Caspa de La Poción, formulado para ayudar a mantener el cabello suave, hidratado y fácil de peinar mientras contribuye al cuidado del cuero cabelludo. Su fórmula acondicionadora ayuda a reducir la sensación de resequedad asociada a la caspa, aportando confort y una apariencia saludable al cabello.  Contenido: 450 ml"
        },
        {
            id: 1783616323734,
            nombre: "Shampoo Crecimiento y Caída La Poción (450 ml)",
            precio: 48900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/shampoo-crecimiento-caida-pocion-1.jpg",
            descripcion: "Estimula el crecimiento saludable, fortaleciendo los folículos desde la raíz. Reduce la caída, ayudando a mantener una melena más abundante y resistente. Nutre e hidrata el cuero cabelludo, favoreciendo el crecimiento del cabello."
        },
        {
            id: 1783616394225,
            nombre: "Acondicionador Suavizante Capilar Kids La Poción",
            precio: 36900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/08/acondicionador-kids.png",
            descripcion: "Acondicionador infantil que suaviza, desenreda y protege el cabello delicado de los niños. 🌿  Contenido: 450 ml"
        },
        {
            id: 1783616452425,
            nombre: "Kit para Rizos Tongolé LA POCIÓN",
            precio: 156000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/kit-capilar-tongole-1.jpg",
            descripcion: "Cuidado Completo: El Kit Capilar Tongolé proporciona un régimen completo que limpia, nutre y estiliza el cabello, asegurando una salud capilar óptima. Hidratación Intensa: Con la mascarilla y el tratamiento del Kit Capilar Tongolé, el cabello recibe una hidratación profunda, eliminando la sequedad y el frizz."
        },
        {
            id: 1783616497904,
            nombre: "Crema para Peinar Dual LA POCIÓN",
            precio: 38900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/creama-peinar-dual-pocion-1.jpg",
            descripcion: "Crema para Peinar Dual La Poción (450 ml) Hidrata y fija simultáneamente, manteniendo el cabello nutrido y en su lugar. Controla el frizz, incluso en alta humedad. Deja el cabello suave al tacto, facilitando el peinado y mejorando su apariencia general."
        },
        {
            id: 1783616585812,
            nombre: "Shampoo Suavizante Capilar Kids La Poción",
            precio: 36900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/08/shampoo-kids.png",
            descripcion: "Cuidado mágico para el cabello de los más pequeños! Este shampoo está formulado especialmente para niñas y niños, ayudando a suavizar y desenredar el cabello con delicadeza y sin lágrimas.+  Peso / Contenido: 450 ml"
        },
        {
            id: 1783616697159,
            nombre: "Tónico control caspa La poción",
            precio: 40000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Lip-oil-hidratante-RubyRose-32.png",
            descripcion: "Tónico Control Caspa La Poción, diseñado para complementar la rutina capilar ayudando a equilibrar el cuero cabelludo y reducir la apariencia de la caspa. Su aplicación sin enjuague permite mantener el cuidado durante el día, aportando frescura y confort mientras mejora la salud capilar. ✨🌿  Peso / Contenido : 70 ml"
        },
        {
            id: 1783616745883,
            nombre: "Shampoo control caspa La poción (Blanco)",
            precio: 44900,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Lip-oil-hidratante-RubyRose-31.png",
            descripcion: "Shampoo Control Caspa La Poción (450 ml) Ayuda a controlar la caspa visible, equilibra el cuero cabelludo y reduce la picazón. Con uso constante, mantiene el cabello limpio, fresco y con aspecto saludable. Ideal para complementar la rutina capilar. ✨🧴"
        },
        {
            id: 1783616808753,
            nombre: "Shampoo Control Grasa LA POCIÓN (Rosado)",
            precio: 39900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/shampoo-control-grasa-pocion-1.jpg",
            descripcion: "Shampoo Control Grasa La Poción (450 ml) Regula la producción de sebo, manteniendo el cabello limpio por más tiempo. Elimina impurezas y residuos, dejando el cuero cabelludo libre de acumulación. Aporta sensación refrescante, ideal para iniciar el día con energía."
        },
        {
            id: 1783616859518,
            nombre: "Tratamiento Tongolé LA POCIÓN",
            precio: 38900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/tratamiento-tongole-pocion-1.jpg",
            descripcion: "Tratamiento Tongolé La Poción (450 ml) Nutrición intensiva desde la raíz. Hidratación profunda que deja el cabello suave al tacto. Fortalece las hebras capilares y mejora la manejabilidad del cabello."
        },
        {
            id: 1783616944699,
            nombre: "Termoprotector capilar LA POCIÓN",
            precio: 48900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/termoprotector-b8-pocion-1.jpg",
            descripcion: "Termoprotector B8 La Poción (150 ml) Protección efectiva contra el calor, reduciendo el riesgo de daño. Previene la deshidratación, manteniendo el cabello hidratado y evitando la sequedad. Aporta suavidad y brillo, mejorando la apariencia general del cabello."
        },
        {
            id: 1783616989745,
            nombre: "Boreal perfume capilar LA POCIÓN",
            precio: 41900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/boreal-perfume-capilar-pocion-1.jpg",
            descripcion: "Boreal Perfume Capilar La Poción (100 ml) Aroma fresco y persistente que embellece el cabello todo el día. Nutre el cabello mientras lo perfuma, mejorando su salud y apariencia. Ayuda a proteger las hebras capilares de factores ambientales."
        },
        {
            id: 1783617036070,
            nombre: "Praia Perfume Capilar LA POCIÓN",
            precio: 41900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/pria-perfume-capilar-pocion-1.jpg",
            descripcion: "Perfume Praia Capilar La Poción (100 ml) Aroma fresco y tropical que transforma el cabello. Hidrata mientras perfuma, mejorando la suavidad. Protege las hebras capilares de factores externos."
        },
        {
            id: 1783617082227,
            nombre: "Tratamiento Dual LA POCIÓN",
            precio: 38900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/tratamiento-dual-pocion-1.jpg",
            descripcion: "Tratamiento Dual La Poción (450 ml) Nutrición intensa y reparación del cabello dañado, mejorando textura y apariencia. Hidratación profunda que deja el cabello suave al tacto. Fortalece las hebras capilares y mejora la manejabilidad del cabello."
        },
        {
            id: 1783617142011,
            nombre: "Shampoo Tongolé LA POCIÓN",
            precio: 38900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/shampoo-tongole-pocion-1.jpg",
            descripcion: "Limpieza Suave: El Shampoo Tongolé de Poción proporciona una limpieza eficaz sin resecar el cabello. Fortalecimiento Capilar: Gracias al Shampoo Tongolé La Poción, el cabello se fortalece reduciendo la rotura y mejorando su resistencia. Brillo Saludable: El Shampoo Tongolé La Poción aporta brillo dejándolo con una apariencia radiante y saludable. Peso / Contenido : 450 ml"
        },
        {
            id: 1783617199963,
            nombre: "Refill Mascarilla Ancestral La poción",
            precio: 35900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/02/kit-crema-corporal-splash-2025-02-03T160515.026.png",
            descripcion: "Mascarilla Capilar Ancestral La Poción – Formato Refill (350 ml Fórmula rica en ingredientes ancestrales que nutre, hidrata y rejuvenece desde la raíz hasta las puntas. Devuelve suavidad, brillo y vitalidad natural. Ideal para todo tipo de cabello, tratamiento intensivo para recuperar la salud capilar. Formato refill sostenible y de lujo."
        },
        {
            id: 1783617301515,
            nombre: "Refill mascarilla tongolé La poción",
            precio: 35900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/02/kit-crema-corporal-splash-2025-02-03T161553.520.png",
            descripcion: "Mascarilla Capilar Ancestral La Poción – Formato Refill (350 ml) Fórmula rica en ingredientes ancestrales que nutre, hidrata y rejuvenece desde la raíz hasta las puntas. Devuelve suavidad, brillo y vitalidad natural. Ideal para todo tipo de cabello, tratamiento intensivo para recuperar la salud capilar. Formato refill sostenible y de lujo"
        },
        {
            id: 1783617369239,
            nombre: "Suplemento Capilar Bite Me LA POCIÓN",
            precio: 39900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/suplemento-capilar-bite-banana-pocion-1.jpg",
            descripcion: "Suplemento Capilar Bite Me La Poción (250 ml) Fortalece el cabello, reduciendo fragilidad y rotura. Estimula el crecimiento capilar. Mejora la textura, dejándolo más suave y manejable."
        },
        {
            id: 1783617413862,
            nombre: "óleo Capilar Hidratante brillo infinito LA POCIÓN",
            precio: 48900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/oleo-capilar-reparacion-cabello-pocion-1.jpg",
            descripcion: "Óleo Capilar Hidratante La Poción (30 ml) Hidratación intensa que restaura el cabello seco y dañado. Controla el frizz, manteniendo un acabado pulido ante cualquier clima. Aporta brillo natural, mejorando la apariencia general y dejándolo radiante."
        },
        {
            id: 1783617454501,
            nombre: "Refill shampoo La poción",
            precio: 34900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/02/kit-crema-corporal-splash-2025-02-03T155651.483.png",
            descripcion: "Refill Shampoo La Poción (440 ml) Cuidado capilar efectivo y responsable con el medio ambiente. Mantiene el cabello limpio, suave y lleno de vida. Reduce el uso de envases plásticos, misma fórmula de calidad en formato más ecológico y económico."
        },
        {
            id: 1783617496964,
            nombre: "Refill shampoo La poción",
            precio: 34900,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/02/kit-crema-corporal-splash-2025-02-03T155651.483.png",
            descripcion: "El Refill Shampoo La Poción es la opción perfecta para quienes buscan un cuidado capilar efectivo y responsable con el medio ambiente. Este recambio de shampoo mantiene tu cabello limpio, suave y lleno de vida, mientras reduces el uso de envases plásticos. Disfruta de la misma fórmula de calidad que tanto te gusta, ahora de forma más ecológica y económica.  Peso / Contenido : 440 ml"
        },
        {
            id: 1783617547214,
            nombre: "Mascarilla Capilar Intensiva Ancestral LA POCIÓN",
            precio: 39900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/mascarilla-ancestral-pocion-1.jpg",
            descripcion: "Mascarilla Ancestral La Poción (350 ml) Revitaliza el cabello dañado, restaurando su fuerza con ingredientes naturales. Nutrición intensa que mejora textura y manejabilidad. Protege el cabello de factores ambientales, manteniéndolo saludable y brillan"
        }
    ],
    "capilar-skala": [
        {
            id: 1782266595489,
            nombre: "Skala mais lisos cabello Extra liso 1 litro",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/11/Formato-PW-no-usar-100.png",
            descripcion: "Disfruta de un cabello suave, brillante y con efecto extra liso con el Skala Mais Lisos, especialmente formulado para mantener la alineación y el control del frizz en cabellos lacios o alisados. 🌿 Su textura ligera hidrata profundamente sin apelmazar, dejando tu melena con movimiento natural y un acabado sedoso.  Peso / Contenido : 1000 g"
        },
        {
            id: 1782266804036,
            nombre: "Skala tratamiento babosa tto capilar 1 litro",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/Formato-PW-no-usar-9-2.png",
            descripcion: "Skala Babosa 1 Litro, una fórmula nutritiva ideal para hidratar profundamente, fortalecer y devolver el brillo natural a tu cabello. Enriquecido con extracto de sábila (babosa), ayuda a revitalizar incluso las hebras más secas y maltratadas, dejándolas suaves, manejables y llenas de vida. 💚✨  Peso / Contenido : 1 litro"
        },
        {
            id: 1782266849050,
            nombre: "Skala Lama Negra para cabellos oscuros sin vida 1 litro",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/11/Formato-PW-no-usar-95.png",
            descripcion: "Devuélvele la fuerza y luminosidad a tu cabello con la Crema Skala Lama Negra, especialmente formulada para cabellos oscuros y sin brillo. Su fórmula con extractos naturales hidrata profundamente, realza el tono natural y deja el cabello suave, sedoso y lleno de vida. 🌿💆‍♀️  Peso / Contenido : 1000 g"
        },
        {
            id: 1782266910704,
            nombre: "Skala mais cachinhos 2 en 1 hidratación y brillo 1 litro",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/11/Formato-PW-no-usar-98.png",
            descripcion: "Define, hidrata y da vida a tus rizos con el Skala Mais Cachinhos, una fórmula creada especialmente para el cuidado de los cabellos rizados, crespos y ondulados. 💁‍♀️🌸 Su combinación de ingredientes naturales deja tus rizos suaves, brillantes y llenos de movimiento.  Peso / Contenido : 1000 g"
        },
        {
            id: 1782267057724,
            nombre: "Skala divino potao cabellos muy rizados 1 litro tarro rosa",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/11/Formato-PW-no-usar-99.png",
            descripcion: "Define, nutre y realza tus rizos con el Skala Divino Potão, el aliado perfecto para cabellos muy rizados, crespos o afro. 🌿 Su fórmula enriquecida con ingredientes naturales hidrata profundamente, aportando suavidad, brillo y una definición espectacular sin frizz.  Peso / Contenido : 1000 g"
        },
        {
            id: 1782267114021,
            nombre: "Skala divino potinho cabellos crespísimos 1 litro tarro fucsia",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/11/Formato-PW-no-usar-2025-11-11T163638.382.png",
            descripcion: "Skala divino potinho cabellos crespísimos 1 litro tarro fucsia"
        },
        {
            id: 1782267188407,
            nombre: "Mascarilla Capilar Skala Bomba De Vitaminas",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Bloom-lumi-gloss-hidratante-Bloomshell-tono-03-9.png",
            descripcion: "Mascarilla capilar Skala Bomba de Vitaminas, diseñada para complementar el cuidado del cabello ayudando a nutrirlo, suavizarlo y mejorar su apariencia. Su fórmula aporta hidratación y deja el cabello más manejable, brillante y con sensación sedosa. ✨💚  Peso / Contenido : 1000 g"
        }
    ],
    "capilar-la-receta": [
        {
            id: 1782006886680,
            nombre: "Tónico Crecimiento Capilar y Barba LA RECETA CBD",
            precio: 44000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/tonico-capilar-crecimiento-cannabis-120ml-lareceta-1.jpg",
            descripcion: "Estimula el crecimiento: El tónico crecimiento capilar y barba La Receta CBD fomenta el crecimiento de cabello y barba, mejorando su densidad. Revitaliza los folículos: Con el tónico crecimiento de La Receta, revitalizas los folículos pilosos, asegurando un cabello y barba más fuertes"
        },
        {
            id: 1782007073179,
            nombre: "Shampoo Antigrasa con Romero La receta",
            precio: 50000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/kit-shampoo-anticaspa-y-acondicionador-cannabis-1.png",
            descripcion: "Shampoo Antigrasa y Crecimiento Capilar con Romero La Receta (450 ml)  Controla el exceso de grasa en el cuero cabelludo.  Estimula el crecimiento de un cabello más fuerte y saludable.  Ideal para raíz grasa, mejorando la salud capilar en general."
        },
        {
            id: 1782007279367,
            nombre: "Shampoo Anticaspa con Aceite de Cannabis La receta",
            precio: 50000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/Iluminador-High-Light-Bloom-Glow-Bloomshel-Tono-1-99.png",
            descripcion: "Shampoo Anticaspa con Aceite de Cannabis La Receta (500 ml)  Combate eficazmente la caspa y alivia la picazón.  Mantiene el cuero cabelludo hidratado, saludable y libre de impurezas.  Deja el cabello limpio, suave y sin escamas."
        },
        {
            id: 1782007410977,
            nombre: "Acondicionador de Cannabis Crecimiento capilar La receta",
            precio: 45000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/acondicionador-cannabis.png",
            descripcion: "Disfruta de un cabello más saludable y libre de caspa con el Acondicionador con Aceite de Cannabis para Crecimiento Capilar y Anticaspa La Receta. Su fórmula única, enriquecida con aceite de cannabis, hidrata profundamente, combate la caspa y estimula el crecimiento capilar, dejándote un cabello suave, brillante y revitalizado.  Peso / Contenido: 500 ml"
        },
        {
            id: 1782007515134,
            nombre: "Shampoo de Cannabis y argan Crecimiento capilar La receta",
            precio: 45000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/shampoo-de-cannabis-1.png",
            descripcion: "Shampoo con Aceite de Argán y Cannabis La Receta (500 ml)  Combate la caspa y promueve el crecimiento capilar.  Hidrata y mantiene el cabello saludable desde la raíz hasta las puntas.  Fórmula natural con argán y cannabis para un tratamiento completo."
        },
        {
            id: 1782007630272,
            nombre: "Aceite Reparador de Puntas LA RECETA CBD",
            precio: 34000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/aceite-reparacador-puntas-cannabis-30ml-receta-3.jpg",
            descripcion: "Aceite Reparador de Puntas con Cannabis (30 ml)  Repara en profundidad, nutriendo las puntas y evitando la rotura.  Aporta brillo intenso y aspecto saludable.  Controla el frizz, manteniendo el cabello suave y manejable."
        },
        {
            id: 1782007865511,
            nombre: "Exfoliante desintoxicante Aceite de cannabis La receta",
            precio: 64000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/01/sh-anticaspa-acondicionador-y-exfoliante-2.png",
            descripcion: "Exfoliante Capilar con Sal del Himalaya y Aceite de Cannabis La Receta (220 gr)  Purifica y desintoxica el cuero cabelludo con sal del Himalaya.  Combate la caspa y estimula el crecimiento capilar con aceite de cannabis.  Deja el cuero cabelludo limpio, equilibrado y saludable."
        }
    ],
    "capilar-lissia": [
        {
            id: 1782611066662,
            nombre: "Aceite capilar y corporal Romero Lissia pequeño 115 ml",
            precio: 11300,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/AK-Protector-solar-alta-proteccion-Girly-1.png",
            descripcion: "Estimula el crecimiento capilar y fortalece el cabello debilitado.  Hidrata y nutre profundamente, dejando el cabello suave, brillante y manejable.  Contenido: 115 ml."
        },
        {
            id: 1782611238976,
            nombre: "Shampoo Embrión de Pato Lissia 425 ml",
            precio: 17000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/04/Este-tratamiento-se-aplica-despues-del-lavado-del-cabello-se-deja-actuar-durante-unos-minutos-y-luego-se-enjuaga-47.png",
            descripcion: "Shampoo Embrión de Pato Lissia (425 ml)  Libre de sulfatos, ideal para cabellos sensibles y con tendencia a la resequedad.  Limpieza profunda sin maltratar el cuero cabelludo.  Aporta suavidad, brillo natural e hidratación ligera.  Ideal para uso diario y apto para todo tipo de cabello"
        },
        {
            id: 1782611349171,
            nombre: "Balsamo Embrión de Pato Lissia 425 ml",
            precio: 17000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/04/Este-tratamiento-se-aplica-despues-del-lavado-del-cabello-se-deja-actuar-durante-unos-minutos-y-luego-se-enjuaga-57.png",
            descripcion: "El bálsamo se puede utilizar después del champú y el acondicionador, o como tratamiento intensivo para el cabello. Se recomienda aplicar una cantidad adecuada de producto en el cabello húmedo, masajear suavemente y dejar actuar durante unos minutos antes de enjuagar.  Contenido: 425 ml"
        },
        {
            id: 1782611484378,
            nombre: "Shampoo Equino anticaída lissia 850 ml",
            precio: 27000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/Brillo-magico-Pola-PH-Surtido-Al-Azar-Labios-55.png",
            descripcion: "Shampoo anticaída intensivo con extracto de cola de caballo  Tamaño grande 850ml Beneficios: ✔️ Limpieza profunda sin maltratar el cuero cabelludo. ✔️ Aporta suavidad y brillo natural. ✔️ Hidratación ligera para un cabello saludable. ✔️ Ideal para uso diario. ✔️ Apto para todo tipo de cabello."
        }
    ],
    "acc-cabello": [
        {
            id: 1782937139049,
            nombre: "Cepillo Pulidor 3 en 1 Trendy",
            precio: 12000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/cepillo-pulidor-trendy.jpg",
            descripcion: "CONTIENE: 1 cepillo  Beneficios: ✔️ Ideal para peinados pulidos y recogidos. ✔️ Controla el frizz y baby hairs. ✔️ Cerdas firmes que sujetan y acomodan el cabello con facilidad. ✔️ Mango ergonómico que facilita el agarre. ✔️ Perfecto para uso diario o profesional."
        },
        {
            id: 1782940542219,
            nombre: "Kit cepillo + peinilla y scrunchie Trendy Luxé",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/04/Kit-cepillo-peinilla-y-scrunchie-Trendy-Luxe.png",
            descripcion: "Todo lo que necesitas para cuidar y estilizar tu cabello en un solo kit.  Contenido: 1 cepillo, 1 peinilla, 1 scrunchi satin y 2 pinzas."
        },
        {
            id: 1782952475029,
            nombre: "Cepillo pulidor profesional clean look trendy",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/03/polvos-sueltos-79.png",
            descripcion: "CONTIENE: 1 cepillo  Beneficios: ✔️ Ideal para peinados pulidos y recogidos. ✔️ Controla el frizz y baby hairs. ✔️ Cerdas firmes que sujetan y acomodan el cabello con facilidad. ✔️ Mango ergonómico que facilita el agarre. ✔️ Perfecto para uso diario o profesional."
        },
        {
            id: 1782952907102,
            nombre: "Kti cepillo portatil + scrunchie Barbie Trendy",
            precio: 8000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Kti-cepillo-portatil-scrunchie-Barbie-Trendy-.png",
            descripcion: "Lleva contigo practicidad y estilo con el Kit Cepillo Portátil + Scrunchie Barbie de Trendy. Este adorable set incluye un cepillo compacto ideal para retocar tu peinado en cualquier momento y una scrunchie suave que ayuda a sujetar el cabello cómodamente sin maltratarlo.  Contenido: 1 cepillo + 1 scrunchie"
        },
        {
            id: 1783460473884,
            nombre: "Cepillo Portable Bloomshell",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/solo-k-prohibido-lau-29.png",
            descripcion: "Cepillo compacto y plegable ideal para llevar en el bolso, perfecto para desenredar el cabello en cualquier momento del día. Su diseño práctico y ligero lo hace indispensable para retoques rápidos sin maltratar el cabello.  Peso / Contenido : 1 unidad de aprox 11 cm"
        },
        {
            id: 1783467665160,
            nombre: "Cepillo capilar Bloom hair Bloomshell",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/solo-k-prohibido-lau-18.png",
            descripcion: "Cepillo capilar ergonómico diseñado para desenredar sin dolor y reducir el quiebre. Su forma curva se adapta al cuero cabelludo y las cerdas flexibles distribuyen mejor la tensión, dejando el cabello suave y manejable.  Peso / Contenido : 1 unidad de aprox 22 cm"
        },
        {
            id: 1783469090738,
            nombre: "Cepillo round moldeador y volumen Bloomshell",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Bloom-lumi-gloss-hidratante-Bloomshell-tono-03-71.png",
            descripcion: "Cepillo round moldeador y volumen Bloomshell, diseñado para ayudar a dar forma al cabello mientras aporta volumen durante el peinado. Su diseño redondo facilita crear ondas, alisar o dar cuerpo, logrando un acabado más definido y profesional. ✨🪮  Peso: 1 unidad"
        },
        {
            id: 1783470657275,
            nombre: "Cepillo ovalado desenrredante antifrizz Bloomshell",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/05/Bloom-lumi-gloss-hidratante-Bloomshell-tono-03-70.png",
            descripcion: "Cepillo ovalado desenredante antifrizz Bloomshell, diseñado para desenredar el cabello de forma suave mientras ayuda a reducir el frizz. Su forma ovalada se adapta mejor al cuero cabelludo, facilitando el peinado y dejando el cabello más manejable y con mejor apariencia. ✨🪮  Peso :1 unidad"
        }
    ],
    "acc-rostro": [
        {
            id: 1782612239032,
            nombre: "Fijador Cosmic Trendy Profesional",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/07/Apariencia-llamativa-y-festiva.-17.png",
            descripcion: "El Fijador Cosmic Trendy Profesional está diseñado para prolongar la duración del maquillaje, manteniendo un acabado impecable por más tiempo.  Contenido: 100 ml"
        },
        {
            id: 1782781863184,
            nombre: "Kit Viajero x6 Brochas Trendy Negras",
            precio: 50000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/12/kit-brocha-x6-negra-trendy-1.jpg",
            descripcion: "Kit Viajero x6 Brochas Trendy  Incluye las brochas esenciales para un maquillaje perfecto en cualquier lugar.  Tamaño compacto ideal para viajar, ahorra espacio y asegura comodidad.  Cerdas suaves y de alta calidad que facilitan una aplicación precisa y uniforme."
        },
        {
            id: 1782781979857,
            nombre: "Kit x5 Brochas Viajeras Trendy Moradas",
            precio: 50000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/12/kit-brocha-x5-morado-trendy-1.jpg",
            descripcion: "Kit Viajero 5 Brochas Trendy  Set completo con 5 brochas multifuncionales: 3 para rostro y 2 para ojos.  Cerdas sintéticas suaves que no maltratan la piel.  Mango ergonómico, ligero y resistente.  Ideal para principiantes y uso profesional.  Apto para productos líquidos, en crema y en polvo."
        },
        {
            id: 1782784225405,
            nombre: "Kit de brochas y pomitos Trendy luxé",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/04/Cosmetiquera-coleccionable-Pantera-Rosa-Melu-18.png",
            descripcion: "Kit de Brochas y Pomitos Trendy Luxé (2 brochas + 2 pomitos)  Diseñado para una aplicación completa y uniforme del maquillaje.  Incluye brochas esenciales y pomitos (esponjas) para difuminar y aplicar distintos productos.  Ideal para uso personal o profesional. ✨💄"
        },
        {
            id: 1782926010849,
            nombre: "Kit x4 brochas Brown duo Trendy pro",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Kit-x4-brochas-Brown-duo-Trendy-pro-.png",
            descripcion: "Logra una aplicación precisa y profesional de tu maquillaje con el Kit x4 Brochas Brown Duo Trendy Pro. Este práctico set incluye cuatro brochas esenciales diseñadas para facilitar la aplicación y difuminado de productos para rostro y ojos, permitiendo acabados más uniformes y definidos."
        },
        {
            id: 1782928597150,
            nombre: "Kit x5 mini brochas + cosmetiquera Trendy Rosaditas",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Kit-x5-mini-brochas-cosmetiquera-Trendy-Rosaditas-.png",
            descripcion: "Lleva tus esenciales de maquillaje a todas partes con el Kit x5 Mini Brochas + Cosmetiquera Trendy Rosaditas. Este práctico set incluye cinco mini brochas ideales para diferentes aplicaciones de maquillaje, acompañadas de una cosmetiquera compacta y funcional para mantener tus accesorios organizados."
        },
        {
            id: 1782938258042,
            nombre: "Kit x4 mini puff polvos Trendy",
            precio: 6000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/Formato-PW-no-usar-37.png",
            descripcion: "Kit de 4 Mini Puff Trendy (aprox. 3 cm c/u)  Suaves y compactos, ideales para aplicar y retocar polvos sueltos o compactos con precisión.  Perfectos para llevar en el bolso y mantener el maquillaje impecable todo el día."
        },
        {
            id: 1782941153771,
            nombre: "Esponjas x2 Barbie mattel Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/04/Esponjas-x2-Barbie-mattel-Trendy-.png",
            descripcion: "Logra un acabado uniforme y profesional con el set de Esponjas x2 Barbie Mattel de Trendy.  Contenido: 1 Blender grande y 1 blender mini"
        },
        {
            id: 1782947798563,
            nombre: "Encrespador Pro mini Luxé Trendy",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/04/Encrespador-Pro-mini-Luxe-Trendy-.png",
            descripcion: "Logra un rizado perfecto en tus pestañas con el Encrespador Pro Mini de Luxé Trendy.  Contenido: 1 encrespador"
        },
        {
            id: 1782952741696,
            nombre: "Kit herramientas básicas rostro Luxé Trendy",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/04/Kit-herramientas-basicas-rostro-Luxe-Trendy.png",
            descripcion: "Kit Herramientas Básicas Rostro Luxé Trendy (Encrespador + Tijeras para nariz y cejas + Depilador + Perfilador de cejas)"
        },
        {
            id: 1782953137272,
            nombre: "Kit brochas viajeras Rugrats con estuche Trendy",
            precio: 40000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Kit-brochas-viajeras-Rugrats-con-estuche-Trendy-.png",
            descripcion: "Kit de Brochas Viajeras Rugrats Trendy  Incluye brochas esenciales para rostro y ojos.  Estuche compacto inspirado en Rugrats para mantenerlas organizadas y protegidas.  Ideal para viajes o uso diario."
        },
        {
            id: 1782954078176,
            nombre: "Pestañas Postizas Montoc 3D x5 plateadas Drama MIX",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/04/Bloom-lumi-gloss-hidratante-Bloomshell-tono-03-4.png",
            descripcion: "Pestañas postizas Montoc 3D x5 Drama Mix (plateadas), diseñadas para aportar volumen, longitud y un efecto impactante a la mirada. Su estilo variado permite crear diferentes looks, desde intensos hasta más definidos, con un acabado llamativo y profesional. ✨👁️  Peso / Contenido : 1 cajita contiene 5 pares de pestañas"
        },
        {
            id: 1782954285788,
            nombre: "Brocha Profesional Montoc doble productos cremosos",
            precio: 18900,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/brocha-individual-montoc-b61.jpg",
            descripcion: "Brocha Profesional Montoc Doble para Productos Cremosos (1 unidad)  Diseño doble que permite aplicación exacta y difuminado impecable de productos cremosos.  Acabado suave y natural.  Se adapta a diversas necesidades de maquillaje."
        },
        {
            id: 1782954503250,
            nombre: "Pestañas postizas Montoc Organic Mia x5 Moradas",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/Cosmetiquera-coleccionable-Pantera-Rosa-Melu-72.png",
            descripcion: "Pestañas Postizas Montoc Organic Mia x5 (1 cajita = 5 pares)  Diseño ligero y cómodo que se adapta fácilmente al ojo.  Aportan volumen y longitud con acabado natural, elegante y definido.  Perfectas para uso diario u ocasiones especiales. 👁️✨"
        },
        {
            id: 1782954732109,
            nombre: "Pestañas Postizas Montoc 3D x5 Isabella",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/solo-k-prohibido-lau-39.png",
            descripcion: "Pestañas Postizas Montoc 3D x5 Isabella (1 cajita = 5 pares)  Efecto tridimensional que aporta volumen, curvatura y definición.  Acabado impactante pero natural, elegante y sofisticado.  Ideales tanto para el día como para ocasiones especiales. 👁️✨"
        },
        {
            id: 1782954830956,
            nombre: "Brocha doble Humide Montoc Cobertura base B73",
            precio: 28000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/10/Formato-PW-no-usar-24.png",
            descripcion: "Brocha Doble Húmide Montoc B73 (1 brocha, aprox. 16 cm)  Formato 2 en 1: brocha plana para aplicar y redondeada para difuminar.  Ideal para bases líquidas, cremosas o en mousse.  Cobertura uniforme y profesional con acabado natural, sin líneas ni marcas. 💄💧"
        },
        {
            id: 1782955001576,
            nombre: "Pegante Pestañas Montoc Profesional",
            precio: 28000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/09/pegante-pestana-montoc-1.jpg",
            descripcion: "Pegante para Pestañas Montoc Profesional (5 ml)  Adhesión firme y prolongada que mantiene las pestañas en su lugar todo el día.  Resistente al agua, asegura que se mantengan intactas en condiciones húmedas.  Consistencia ideal para aplicación exacta, sencilla y sin errores."
        },
        {
            id: 1782956443069,
            nombre: "Encrespador Amore curl Montoc surtido",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Encrespador-Amore-curl-Montoc-surtido-.png",
            descripcion: "El encrespador Amore Curl de Montoc es una herramienta diseñada para dar curvatura y elevar las pestañas de forma rápida y sencilla.  Contenido: 1 encrespador"
        },
        {
            id: 1782956674870,
            nombre: "Encrespador pro curler Montoc surtido",
            precio: 14000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Encrespador-Amore-curl-Montoc-surtido-1.png",
            descripcion: "El encrespador Pro Curler de Montoc es una herramienta profesional diseñada para rizar y levantar las pestañas desde la raíz, logrando una mirada más abierta y definida.  Contenido: 1 encrespador en tono al azar"
        },
        {
            id: 1782958104670,
            nombre: "Pestañas postizas punto a punto Montoc Profesional",
            precio: 10500,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/05/solo-K-NO-USAR-78.png",
            descripcion: "Peso / Contenido: 1 unidad  Beneficios: ✔️ Aportan volumen y longitud a tus pestañas naturales. ✔️ Fácil aplicación y ajuste cómodo. ✔️ Reutilizables con el cuidado adecuado. ✔️ Realzan la mirada de forma instantánea. ✔️ Disponibles en diferentes estilos para cada ocasión."
        },
        {
            id: 1783452829147,
            nombre: "Perfilador facial x2 Montoc",
            precio: 9200,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Perfilador-facial-x2-Montoc-.png",
            descripcion: "El perfilador facial x2 de Montoc es un set de rasuradores diseñados para eliminar el vello facial fino (vellito o "pelusa") y perfilar zonas como cejas, patillas y contorno del rostro.  Contenido: 2 perfiladores"
        },
        {
            id: 1783452962726,
            nombre: "Kit Brochas viajero Zoe Rose Montoc LP660",
            precio: 60000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/solo-K-NO-USAR-79.png",
            descripcion: "Kit Brochas Viajero Zoe Rose Montoc (10 unidades)  Cerdas suaves y de alta calidad para aplicar y difuminar sombras de manera uniforme.  Logra transiciones perfectas y un look de ojos impactante.  Fácil de transportar y guardar, ideal para viajar.  Diseño funcional y estéticamente atractivo."
        },
        {
            id: 1783456769557,
            nombre: "Jabón limpia brochas masterly Montoc",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/11/Jabon-limpia-brochas-masterly-Montoc-.png",
            descripcion: "abón Limpia Brochas Masterly Montoc (120 ml)  Elimina residuos de maquillaje, dejando brochas limpias y listas para usar.  Ayuda a eliminar bacterias, manteniéndolas saludables y seguras para la piel.  Fácil y práctico para mantener las brochas impecables."
        },
        {
            id: 1783456989075,
            nombre: "Rizador de pestañas profesional Montoc",
            precio: 8000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Rizador-de-pestanas-profesional-Montoc.png",
            descripcion: "El rizador de pestañas profesional Montoc es una herramienta esencial para lograr pestañas curvadas y una mirada más abierta en segundos.  Contenido: 1 rizador profesional"
        },
        {
            id: 1783457067477,
            nombre: "Sacapuntas cosmetico Profesional Montoc",
            precio: 8000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/03/Sacapuntas-cosmetico-Profesional-Montoc.png",
            descripcion: "El sacapuntas cosmético profesional de Montoc es una herramienta diseñada para afilar lápices de maquillaje como delineadores de ojos, labios o cejas, garantizando una punta precisa y uniforme.  Contenido: 1 sacapuntas profesional"
        },
        {
            id: 1783459567810,
            nombre: "Beauty Blender Bloomshell Profesional",
            precio: 6500,
            imagen: "https://kromaspace.com/wp-content/uploads/2024/10/kit-maquillaje-halloween-4.jpg",
            descripcion: "Borla ideal para aplicar todos tus productos cremosos o en polvo y difuminarlos a la perfección Material suave y esponjoso que se lava fácilmente Beauty blender que crece el doble de su tamaño cuando se humedece"
        },
        {
            id: 1783461080264,
            nombre: "Brocha profesional Base Bloomshell C6",
            precio: 18000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/01/Formato-PW-no-usar-9.png",
            descripcion: "Descubre la Brocha Profesional para Base Bloomshell, una herramienta ideal para lograr una aplicación uniforme y un acabado impecable en tu maquillaje. Su diseño profesional permite difuminar la base fácilmente, dejando la piel suave, natural y sin marcas. ✨🖌️  Peso / Contenido : 1 unidad"
        },
        {
            id: 1783469023086,
            nombre: "Encrespador de pestañas tornasol Bloomshell",
            precio: 15000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/02/EH-Encrespador-de-pestanas-tornasol-Bloomshell.png",
            descripcion: "El Encrespador de Pestañas Tornasol Bloomshell está diseñado para brindar una curvatura definida y natural desde la raíz, realzando la mirada al instante.  Contenido: 1 unidad"
        }
    ],
    "acc-varios": [
        {
            id: 1782254621905,
            nombre: "Cepillo aplicador autobronceador D´luchi Kaba",
            precio: 29000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/solo-K-NO-USAR-iluminador-7.jpg",
            descripcion: "1 Cepillo Aplicador Autobronceador D'luchi Kaba Logra un bronceado uniforme y sin manchas desde casa 🌞✨  🌸 Diseñado especialmente para aplicar autobronceadores líquidos, en mousse o crema"
        },
        {
            id: 1782780171822,
            nombre: "Tarjetero Monedero Trendy Cuerina",
            precio: 16000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/11/o-1.png",
            descripcion: "Tarjetero Monedero Trendy para llevar tus documentos importantes  Material de alta calidad que te garantiza gran durabilidad y es muy fácil de limpiar.  Peso / Contenido: 1 unidad  Medidas : Alto 9.5 cm * Ancho 13 cm"
        },
        {
            id: 1782781001853,
            nombre: "Cosmetiquera plegable Trendy grande",
            precio: 30000,
            imagen: "https://kromaspace.com/wp-content/uploads/2023/10/solo-K-NO-USAR-2025-06-15T182732.170.png",
            descripcion: "Cosmetiquera amplia plegable trendy  Material suave y muy fácil de limpiar Espaciosa y segura para tus productos cosméticos Contenido: 1 cosmetiquera amplia (28 cms)"
        },
        {
            id: 1782947891932,
            nombre: "Cosmetiquera Barbie Dreams Trendy",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2026/06/Cosmetiquera-Barbie-Dreams-Trendy-.png",
            descripcion: "Lleva tu maquillaje y accesorios favoritos con estilo gracias a la Cosmetiquera Barbie Dreams Trendy. Inspirada en el universo de Barbie, combina un diseño moderno y femenino con un amplio espacio para organizar cosméticos, productos de cuidado personal y accesorios de belleza."
        },
        {
            id: 1782950199991,
            nombre: "Organizador de brochas Retro rock Trendy",
            precio: 25000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/10/Formato-PW-no-usar-71.png",
            descripcion: "Mantén tus brochas siempre ordenadas y al alcance con este Organizador de Brochas Trendy, práctico y con estilo. Ideal para tu tocador, estación de maquillaje o para llevar en tus viajes.  Tono al azar entre rosado y blanco  Medidas: 15 × 12 × 25 cm."
        },
        {
            id: 1783466361184,
            nombre: "Estuche porta cosmeticos Bloomshell",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/07/Formato-pw-NO-USAR-51.png",
            descripcion: "Tamaño práctico que cabe en cualquier bolso 🎨 Diseño moderno y resistente 🧼 Fácil de limpiar y muy duradero 💄 Ideal para labiales, polvos, mini brochas y más ✨ Perfecto para uso diario o como regalo"
        },
        {
            id: 1783467955293,
            nombre: "Cosmetiquera Bloom Metalic Bloomshell",
            precio: 20000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/12/solo-k-prohibido-lau-30.png",
            descripcion: "Cosmetiquera compacta y resistente con acabado metálico brillante, ideal para llevar maquillaje y accesorios de manera organizada y segura. Su diseño moderno y práctico la hace perfecta para uso diario o para viajes.  Peso / Contenido : 1 cosmetiquera"
        },
        {
            id: 1783468451500,
            nombre: "Encrespador Mini Bloom Curl Bloomshell",
            precio: 9000,
            imagen: "https://kromaspace.com/wp-content/uploads/2025/09/solo-K-prohibido-Lau-xD-24.png",
            descripcion: "ncrespador Mini Bloom Curl Bloomshell es un rizador de pestañas práctico y elegante, diseñado en tamaño compacto para llevarlo a todas partes. Su acabado en color plata y versión mini en rosa lo hacen funcional y sofisticado a la vez.  Peso / Contenido : 1 unidad"
        }
    ],
    "det-ramos": [],
    "det-kits": [],
    "det-personalizados": []
};
