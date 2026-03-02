export const DEFAULT_LANGUAGE = 'EN';

export const LANGUAGE_OPTIONS = ['EN', 'ES', 'FR', 'KR'];

export const TRANSLATIONS = {
    EN: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: 'Cumulative Sales Volume',
            sinceText: 'Since 2025',
        },
        ctas: {
            businessInquiries: 'Business Inquiries',
            chatbot: 'Chatbot',
        },
        chatbotPanel: {
            title: 'HAGOBOGO Assistant',
            intro: 'What would you like to know? Choose a frequently asked question below.',
            emptyState: 'Pick one of the questions below to see a short answer and move naturally into the next step.',
            labels: {
                answer: 'Quick Answer',
                recommended: 'Recommended Start',
            },
            buttons: {
                close: 'Close chatbot',
                businessInquiries: 'Business Inquiries',
                viewProposal: 'View Proposal',
                otherQuestions: 'Other Questions',
            },
            questions: [
                {
                    id: 'product',
                    question: 'What kind of product is HAGOBOGO?',
                    answer: 'HAGOBOGO is a solution that helps users check and manage male reproductive health more easily at home. If you need more detail about product introduction or business adoption, please continue through Business Inquiries.',
                },
                {
                    id: 'audience',
                    question: 'Who mainly uses this product?',
                    answer: 'The main users are couples preparing for pregnancy, people interested in self-care, and consumers who want earlier awareness of male fertility health. From a retail perspective, it also works well as a couple-oriented product.',
                },
                {
                    id: 'markets',
                    question: 'In which countries is it being sold?',
                    answer: 'HAGOBOGO has already built results in Korea and Japan and is expanding into markets including the United States, Canada, and Singapore. This makes it suitable for broader global distribution discussions.',
                },
                {
                    id: 'strengths',
                    question: 'What are the product strengths?',
                    answer: 'Its key strengths are visual intuitiveness through smartphones, app-based result tracking, and trust built on global certification. It is positioned not only as a test tool, but as a continuing management experience.',
                },
                {
                    id: 'offline',
                    question: 'What are the offline retail advantages?',
                    answer: 'It can expand the family planning category beyond women-centered products and help create new customer demand and basket size growth. Couple-kit merchandising and golden-zone placement are also strong retail advantages.',
                },
                {
                    id: 'proposal',
                    question: 'Where can I view the proposal?',
                    answer: 'You can review the proposal directly inside the site and download the language-specific PDF version as well. If you need a deeper introduction package, please continue through Business Inquiries.',
                },
                {
                    id: 'contact',
                    question: 'How can I make a business inquiry?',
                    answer: 'Use the Business Inquiries button below this panel to open the existing inquiry form immediately. Once you submit your company name, email, and inquiry details, the team can review and respond.',
                },
            ],
        },
        inquiryModal: {
            title: 'Business Inquiries',
            fields: {
                name: 'Name',
                title: 'Job Title',
                country: 'Country',
                countryPlaceholder: 'Select Country',
                companyName: 'Company Name',
                email: 'Email',
                inquiry: 'Inquiry',
            },
            buttons: {
                cancel: 'Cancel',
                save: 'Save',
                saving: 'Saving...',
            },
            errors: {
                required: 'Required field',
                invalidEmail: 'Not an email format',
            },
            submit: {
                success: 'Your inquiry has been submitted successfully.',
                failure: 'Failed to send inquiry. Please try again later.',
                missingApiUrl: 'The Apps Script URL is not configured.',
                sheetNotFound: 'The target Google Sheets tab could not be found.',
                networkFailure: 'A network error occurred while sending the inquiry.',
                invalidResponse: 'Apps Script returned an invalid response.',
            },
        },
        ticker: [
            "Service Advancement: Intin's 'HAGOBOGO' app has significantly enhanced digital healthcare accessibility by introducing its 2.0 update, featuring user-engaging contents such as a sperm encyclopedia and quiz games.",
            "Growing Market Demand: As interest in male infertility prevention and self-health management rises, the 'HAGOBOGO' self-testing kit is gaining significant attention as an essential health appliance for newlyweds and single-person households.",
            "Global Expansion: Building on its domestic success, 'HAGOBOGO' is expanding its presence as a mobile-based reproductive health monitoring solution by launching a global dedicated app for international users.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. All rights reserved.',
            'Company Name Representative: Kim Ji-hoon, CEO of INTIN Inc.',
            'Location: 52 Cheombok-ro, Dong-gu, Daegu',
            'Business Registration Number: 108-81-90649 | Mail-Order Sales Registration Number: No. 2018-Daegu Dong-gu-0025',
            'Privacy Officer: Lee Yoo-jin',
            'Contact: 070-4239-9899 | help@intin.kr',
        ],
    },
    ES: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: 'Volumen Acumulado de Ventas',
            sinceText: 'Desde 2025',
        },
        ctas: {
            businessInquiries: 'Consultas Comerciales',
            chatbot: 'Asistente Virtual',
        },
        chatbotPanel: {
            title: 'Asistente HAGOBOGO',
            intro: 'Que le gustaria saber? Seleccione abajo una pregunta frecuente.',
            emptyState: 'Seleccione una de las preguntas para ver una respuesta breve y avanzar naturalmente al siguiente paso.',
            labels: {
                answer: 'Respuesta Rapida',
                recommended: 'Inicio Recomendado',
            },
            buttons: {
                close: 'Cerrar asistente',
                businessInquiries: 'Consultas Comerciales',
                viewProposal: 'Ver Propuesta',
                otherQuestions: 'Otras Preguntas',
            },
            questions: [
                {
                    id: 'product',
                    question: 'Que tipo de producto es HAGOBOGO?',
                    answer: 'HAGOBOGO es una solucion que ayuda a revisar y gestionar la salud reproductiva masculina de forma mas sencilla en casa. Si necesita una explicacion mas detallada sobre el producto o su adopcion comercial, puede continuar por Consultas Comerciales.',
                },
                {
                    id: 'audience',
                    question: 'Quienes suelen usar este producto?',
                    answer: 'Los usuarios principales son parejas que se preparan para el embarazo, personas interesadas en el autocuidado y consumidores que desean una deteccion mas temprana de la salud reproductiva masculina. Desde la perspectiva del retail, tambien funciona bien como producto para parejas.',
                },
                {
                    id: 'markets',
                    question: 'En que paises se vende?',
                    answer: 'HAGOBOGO ya ha demostrado resultados en Corea y Japon, y sigue expandiendose a mercados como Estados Unidos, Canada y Singapur. Por eso encaja bien en conversaciones de distribucion global.',
                },
                {
                    id: 'strengths',
                    question: 'Cuales son las fortalezas del producto?',
                    answer: 'Sus fortalezas clave son la intuicion visual mediante smartphone, el seguimiento de resultados basado en app y la confianza respaldada por certificaciones globales. No se plantea solo como una prueba, sino como una experiencia de gestion continua.',
                },
                {
                    id: 'offline',
                    question: 'Que ventajas ofrece para retail fisico?',
                    answer: 'Puede ampliar la categoria de planificacion familiar mas alla de los productos centrados en mujeres y ayudar a generar nuevos clientes y mayor ticket medio. Tambien ofrece ventajas claras con merchandising en formato pareja y ubicacion en zona dorada.',
                },
                {
                    id: 'proposal',
                    question: 'Donde puedo ver la propuesta?',
                    answer: 'Puede revisar la propuesta directamente dentro del sitio y tambien descargar la version PDF en su idioma. Si necesita un paquete de introduccion mas detallado, puede continuar por Consultas Comerciales.',
                },
                {
                    id: 'contact',
                    question: 'Como hago una consulta comercial?',
                    answer: 'Use el boton de Consultas Comerciales debajo de este panel para abrir de inmediato el formulario existente. Cuando deje el nombre de la empresa, el correo y los detalles, el equipo podra revisarlo y responder.',
                },
            ],
        },
        inquiryModal: {
            title: 'Consultas Comerciales',
            fields: {
                name: 'Nombre',
                title: 'Cargo',
                country: 'País',
                countryPlaceholder: 'Seleccione un país',
                companyName: 'Nombre de la Empresa',
                email: 'Correo Electrónico',
                inquiry: 'Consulta',
            },
            buttons: {
                cancel: 'Cancelar',
                save: 'Guardar',
                saving: 'Guardando...',
            },
            errors: {
                required: 'Campo obligatorio',
                invalidEmail: 'Formato de correo no válido',
            },
            submit: {
                success: 'Su consulta se ha enviado correctamente.',
                failure: 'No se pudo enviar la consulta. Inténtelo de nuevo más tarde.',
                missingApiUrl: 'La URL de Apps Script no está configurada.',
                sheetNotFound: 'No se encontró la pestaña objetivo de Google Sheets.',
                networkFailure: 'Se produjo un error de red al enviar la consulta.',
                invalidResponse: 'Apps Script devolvió una respuesta no válida.',
            },
        },
        ticker: [
            "Avance del servicio: La aplicación 'HAGOBOGO' de Intin ha mejorado significativamente la accesibilidad de la salud digital con su actualización 2.0, incorporando contenidos atractivos como una enciclopedia del esperma y juegos de preguntas.",
            "Crecimiento de la demanda del mercado: A medida que aumenta el interés por la prevención de la infertilidad masculina y el autocuidado, el kit de autoevaluación 'HAGOBOGO' está ganando gran atención como dispositivo de salud esencial para recién casados y hogares unipersonales.",
            "Expansión global: Basándose en su éxito nacional, 'HAGOBOGO' amplía su presencia como solución móvil de monitoreo de la salud reproductiva mediante el lanzamiento de una aplicación global dedicada para usuarios internacionales.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. Todos los derechos reservados.',
            'Nombre de la empresa y representante: Kim Ji-hoon, director ejecutivo de INTIN Inc.',
            'Ubicación: 52 Cheombok-ro, Dong-gu, Daegu',
            'Número de registro comercial: 108-81-90649 | Número de registro de venta por correo: No. 2018-Daegu Dong-gu-0025',
            'Responsable de privacidad: Lee Yoo-jin',
            'Contacto: 070-4239-9899 | help@intin.kr',
        ],
    },
    FR: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: 'Volume de Ventes Cumulées',
            sinceText: 'Depuis 2025',
        },
        ctas: {
            businessInquiries: 'Demandes Commerciales',
            chatbot: 'Assistant Virtuel',
        },
        chatbotPanel: {
            title: 'Assistant HAGOBOGO',
            intro: 'Que souhaitez-vous savoir ? Selectionnez ci-dessous une question frequente.',
            emptyState: 'Choisissez une question pour voir une reponse courte et passer naturellement a l etape suivante.',
            labels: {
                answer: 'Reponse Rapide',
                recommended: 'Point de Depart Recommande',
            },
            buttons: {
                close: 'Fermer l assistant',
                businessInquiries: 'Demandes Commerciales',
                viewProposal: 'Voir la Proposition',
                otherQuestions: 'Autres Questions',
            },
            questions: [
                {
                    id: 'product',
                    question: 'Quel type de produit est HAGOBOGO ?',
                    answer: 'HAGOBOGO est une solution qui aide a verifier et gerer plus facilement la sante reproductive masculine a domicile. Si vous souhaitez une presentation plus detaillee du produit ou de son adoption commerciale, vous pouvez poursuivre via Demandes Commerciales.',
                },
                {
                    id: 'audience',
                    question: 'Qui utilise principalement ce produit ?',
                    answer: 'Les principaux utilisateurs sont les couples qui preparent une grossesse, les personnes attentives a leur sante et les consommateurs qui souhaitent une meilleure sensibilisation a la fertilite masculine. Du point de vue retail, il fonctionne aussi tres bien comme produit pense pour les couples.',
                },
                {
                    id: 'markets',
                    question: 'Dans quels pays est-il commercialise ?',
                    answer: 'HAGOBOGO a deja obtenu des resultats en Coree et au Japon et poursuit son expansion vers des marches comme les Etats-Unis, le Canada et Singapour. Cela en fait une solution adaptee aux discussions de distribution internationale.',
                },
                {
                    id: 'strengths',
                    question: 'Quels sont les points forts du produit ?',
                    answer: 'Ses principaux atouts sont la lecture visuelle via smartphone, le suivi des resultats par application et la confiance apportee par des certifications globales. Le produit n est pas seulement un test, mais une experience de gestion continue.',
                },
                {
                    id: 'offline',
                    question: 'Quels avantages apporte-t-il en distribution physique ?',
                    answer: 'Il peut elargir la categorie de planification familiale au-dela des produits axes sur les femmes et contribuer a creer de nouveaux clients et un panier moyen plus eleve. Le merchandising en pack couple et le placement en zone chaude sont aussi de vrais avantages.',
                },
                {
                    id: 'proposal',
                    question: 'Ou puis-je consulter la proposition ?',
                    answer: 'Vous pouvez consulter directement la proposition sur le site et telecharger egalement la version PDF dans votre langue. Si vous souhaitez un dossier plus complet, poursuivez via Demandes Commerciales.',
                },
                {
                    id: 'contact',
                    question: 'Comment faire une demande commerciale ?',
                    answer: 'Utilisez le bouton Demandes Commerciales sous ce panneau pour ouvrir immediatement le formulaire existant. Une fois le nom de votre entreprise, votre e-mail et votre demande saisis, l equipe pourra l examiner et vous repondre.',
                },
            ],
        },
        inquiryModal: {
            title: 'Demandes Commerciales',
            fields: {
                name: 'Nom',
                title: 'Intitulé du Poste',
                country: 'Pays',
                countryPlaceholder: 'Sélectionnez un pays',
                companyName: "Nom de l'Entreprise",
                email: 'E-mail',
                inquiry: 'Demande',
            },
            buttons: {
                cancel: 'Annuler',
                save: 'Enregistrer',
                saving: 'Enregistrement...',
            },
            errors: {
                required: 'Champ requis',
                invalidEmail: "Format d'e-mail invalide",
            },
            submit: {
                success: 'Votre demande a bien été envoyée.',
                failure: 'Échec de l’envoi de la demande. Veuillez réessayer plus tard.',
                missingApiUrl: "L'URL Apps Script n'est pas configurée.",
                sheetNotFound: "L'onglet Google Sheets cible est introuvable.",
                networkFailure: "Une erreur réseau s'est produite lors de l'envoi de la demande.",
                invalidResponse: "Apps Script a renvoyé une réponse non valide.",
            },
        },
        ticker: [
            "Avancée du service : l'application 'HAGOBOGO' d'Intin a considérablement amélioré l'accessibilité aux soins de santé numériques grâce à sa mise à jour 2.0, avec des contenus engageants tels qu'une encyclopédie du sperme et des quiz.",
            "Croissance de la demande du marché : avec l'intérêt croissant pour la prévention de l'infertilité masculine et l'autogestion de la santé, le kit d'auto-test 'HAGOBOGO' attire fortement l'attention comme appareil de santé essentiel pour les jeunes mariés et les foyers d'une seule personne.",
            "Expansion mondiale : fort de son succès national, 'HAGOBOGO' étend sa présence comme solution mobile de suivi de la santé reproductive en lançant une application mondiale dédiée aux utilisateurs internationaux.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. Tous droits réservés.',
            "Nom de l'entreprise et représentant : Kim Ji-hoon, PDG d'INTIN Inc.",
            'Adresse : 52 Cheombok-ro, Dong-gu, Daegu',
            'Numéro d’immatriculation commerciale : 108-81-90649 | Numéro d’enregistrement de vente à distance : No. 2018-Daegu Dong-gu-0025',
            'Responsable de la protection des données : Lee Yoo-jin',
            'Contact : 070-4239-9899 | help@intin.kr',
        ],
    },
    KR: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: '누적 판매량',
            sinceText: '2025년부터',
        },
        ctas: {
            businessInquiries: '비즈니스 문의',
            chatbot: '챗봇',
        },
        chatbotPanel: {
            title: 'HAGOBOGO Assistant',
            intro: '무엇이 궁금하신가요? 아래 자주 묻는 질문을 선택해 주세요.',
            emptyState: '아래 질문 중 하나를 선택하면 짧은 답변을 보고 다음 단계로 자연스럽게 이동할 수 있습니다.',
            labels: {
                answer: '빠른 답변',
                recommended: '추천 시작점',
            },
            buttons: {
                close: '챗봇 닫기',
                businessInquiries: '비즈니스 문의',
                viewProposal: '제안서 보기',
                otherQuestions: '다른 질문 보기',
            },
            questions: [
                {
                    id: 'product',
                    question: 'HAGOBOGO는 어떤 제품인가요?',
                    answer: 'HAGOBOGO는 남성 생식 건강을 집에서 더 간편하게 확인하고 관리할 수 있도록 돕는 솔루션입니다. 제품 소개나 도입 상담이 더 필요하시면 비즈니스 문의로 이어서 확인하실 수 있습니다.',
                },
                {
                    id: 'audience',
                    question: '누가 주로 사용하는 제품인가요?',
                    answer: '임신을 준비하는 커플, 자기 건강 관리에 관심 있는 사용자, 남성 생식 건강을 더 일찍 확인하고 싶은 소비자가 주요 사용자층입니다. 유통 관점에서는 커플 대상 제품으로도 활용성이 높습니다.',
                },
                {
                    id: 'markets',
                    question: '어떤 나라에서 판매되고 있나요?',
                    answer: 'HAGOBOGO는 한국과 일본에서 이미 성과를 만들었고, 미국, 캐나다, 싱가포르 등 여러 시장으로 확장 중입니다. 그래서 글로벌 유통 협업 논의에도 적합한 구조를 갖추고 있습니다.',
                },
                {
                    id: 'strengths',
                    question: '제품의 강점은 무엇인가요?',
                    answer: '스마트폰으로 직접 확인할 수 있는 직관성, 앱 기반 결과 관리, 글로벌 인증 기반의 신뢰성이 핵심 강점입니다. 단순 검사 도구를 넘어서 지속 관리 경험까지 함께 제공합니다.',
                },
                {
                    id: 'offline',
                    question: '오프라인 유통에 어떤 장점이 있나요?',
                    answer: '여성용 제품 중심의 가족계획 카테고리를 확장하고, 신규 고객층과 객단가 상승 기회를 만들 수 있다는 점이 장점입니다. 커플 번들 구성과 골든존 배치 전략도 함께 제안할 수 있습니다.',
                },
                {
                    id: 'proposal',
                    question: '제안서는 어디서 볼 수 있나요?',
                    answer: '사이트 안에서 제안서를 바로 확인할 수 있고, 언어별 PDF 다운로드도 가능합니다. 더 자세한 소개 자료가 필요하시면 비즈니스 문의를 통해 이어서 안내받으실 수 있습니다.',
                },
                {
                    id: 'contact',
                    question: '비즈니스 문의는 어떻게 하나요?',
                    answer: '이 패널 아래의 비즈니스 문의 버튼을 누르면 기존 문의 모달이 바로 열립니다. 회사명, 이메일, 문의 내용을 남기시면 검토 후 회신을 받을 수 있습니다.',
                },
            ],
        },
        inquiryModal: {
            title: '비즈니스 문의',
            fields: {
                name: '이름',
                title: '직함',
                country: '국가',
                countryPlaceholder: '국가를 선택하세요',
                companyName: '회사명',
                email: '이메일',
                inquiry: '문의 내용',
            },
            buttons: {
                cancel: '취소',
                save: '저장',
                saving: '전송 중...',
            },
            errors: {
                required: '필수 입력 항목입니다.',
                invalidEmail: '이메일 형식이 올바르지 않습니다.',
            },
            submit: {
                success: '문의가 정상적으로 접수되었습니다.',
                failure: '문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
                missingApiUrl: 'Apps Script 저장 URL이 설정되지 않았습니다.',
                sheetNotFound: 'Google Sheets 대상 시트 탭을 찾지 못했습니다.',
                networkFailure: '문의 전송 중 네트워크 오류가 발생했습니다.',
                invalidResponse: 'Apps Script가 올바른 JSON 응답을 반환하지 않았습니다.',
            },
        },
        ticker: [
            "서비스 고도화: 인틴의 'HAGOBOGO' 앱은 정자 백과사전과 퀴즈 게임 같은 참여형 콘텐츠를 포함한 2.0 업데이트를 통해 디지털 헬스케어 접근성을 크게 향상시켰습니다.",
            "시장 수요 확대: 남성 난임 예방과 자기 건강 관리에 대한 관심이 높아지면서 'HAGOBOGO' 자가 테스트 키트는 신혼부부와 1인 가구의 필수 헬스 가전으로 주목받고 있습니다.",
            "글로벌 확장: 국내 성공을 기반으로 'HAGOBOGO'는 해외 사용자를 위한 전용 글로벌 앱을 출시하며 모바일 기반 생식 건강 모니터링 솔루션으로서 입지를 넓히고 있습니다.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. 모든 권리 보유.',
            '회사명 대표자 : (주)인트인 대표 김지훈',
            '소재지 : 대구광역시 동구 첨복로 52',
            '사업자 등록번호 : 108-81-90649 | 통신판매신고번호 : 제2018-대구동구-0025호',
            '개인정보관리책임자 : 이유진',
            '문의 : 070-4239-9899 | help@intin.kr',
        ],
    },
};
