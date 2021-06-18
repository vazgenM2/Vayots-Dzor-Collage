import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  constructor() { }

  currentLang = 'hy'
  langArr = {
    'title': {
      'hy': 'Վայոց ձորի տարածաշրջանային պետական քոլեջ',
      'ru': 'Вайоцдзорский Областной Государственный Колледж',
      'en': 'Vayots Dzor Regional State Collage',
    },
    'minititle': {
      'hy': 'ՎՁՏՊՔ',
      'ru': 'ВДОГК',
      'en': 'VDRSC',
    },
    'home': {
      'hy': 'Գլխավոր',
      'ru': 'Главная',
      'en': 'Home',
    },
    'profession': {
      'hy': 'Մասնագիտություններ',
      'ru': 'Профессии',
      'en': 'Professions',
    },
    'feedback': {
      'hy': 'Հետադարձ կապ',
      'ru': 'Обратная связь',
      'en': 'Feedback',
    },
    'news': {
      'hy': 'Նորություններ',
      'ru': 'Новости',
      'en': 'News',
    },
    'opportunities': {
      'hy': 'Նոր հնարավորություններ, նոր հեռանկարներ',
      'ru': 'Новые возможности, новые перспективы',
      'en': 'New opportunities, new perspectives',
    },
    'distance_learning': {
      'hy': 'Հեռավար ուսուցում',
      'ru': 'Дистанционное обучение',
      'en': 'Distance learning',
    },
    'distance_learning2': {
      'hy': 'Հեռավար ուսուցում',
      'ru': 'Дистанционное обучение',
      'en': 'Distance learning',
    },
    'college_life': {
      'hy': 'Ներքոլեջային կյանք',
      'ru': 'Студенческая жизнь',
      'en': 'In-college life',
    },
    'college_life2': {
      'hy': 'Ներքոլեջային կյանք',
      'ru': 'Студенческая жизнь',
      'en': 'In-college life',
    },
    'foreign_lang': {
      'hy': 'Օտարալեզու տեղեկատվական նյութեր',
      'ru': 'Информационные материалы на иностранных языках',
      'en': 'Foreign language information materials',
    },
    'edu_processes': {
      'hy': 'Կրթական գործընթացներ',
      'ru': 'Образовательные процессы',
      'en': 'Educational processes',
    },
    'vocational': {
      'hy': 'Արհեստագործական կրթություն',
      'ru': 'Профессионально-техническое образование',
      'en': 'Vocational education',
    },
    'vocational2': {
      'hy': 'Արհեստագործական կրթություն',
      'ru': 'Профессионально-техническое образование',
      'en': 'Vocational education',
    },
    'edu_program': {
      'hy': 'Կրթական ծրագրեր',
      'ru': 'Образовательные программы',
      'en': 'Educational programs',
    },
    'research_works': {
      'hy': 'Հետազոտական աշխատանքներ',
      'ru': 'Исследовательские работы',
      'en': 'Research works',
    },
    'events': {
      'hy': 'Միջոցառումներ',
      'ru': 'События',
      'en': 'Events',
    },
    'anushavan_visits': {
      'hy': 'Քոլեջի հովանավոր Անուշավան Աբրահամյանի այցը քոլեջ',
      'ru': 'Спонсор колледжа Анушаван Абраамян посетил колледж',
      'en': 'College sponsor Anushavan Abrahamyan visits the college',
    },
    'alumni': {
      'hy': 'Շրջանավարտներ',
      'ru': 'Выпускники',
      'en': 'Alumni',
    },
    'alumni2': {
      'hy': 'Շրջանավարտներ',
      'ru': 'Выпускники',
      'en': 'Alumni',
    },
    'collaboration_programs': {
      'hy': 'Համագործակցության ծրագրեր',
      'ru': 'Программы сотрудничества',
      'en': 'Collaboration programs',
    },
    'collaboration_programs2': {
      'hy': 'Համագործակցության ծրագրեր',
      'ru': 'Программы сотрудничества',
      'en': 'Collaboration programs',
    },
    'practice': {
      'hy': 'Պրակտիկա',
      'ru': 'Практика',
      'en': 'Practice',
    },
    'internship_programs': {
      'hy': 'Պրակտիկաների ծրագրեր',
      'ru': 'Программы стажировки',
      'en': 'Internship programs',
    },
    'staff': {
      'hy': 'Աշխատակազմ',
      'ru': 'Персонал',
      'en': 'Staff',
    },
    'director': {
      'hy': 'Տնօրեն',
      'ru': 'Директор',
      'en': 'Director',
    },
    'admin_staff': {
      'hy': 'Վարչական անձնակազմ',
      'ru': 'Административный персонал',
      'en': 'Administrative staff',
    },
    'co_workers': {
      'hy': 'Աշխատակիցներ',
      'ru': 'Коллеги',
      'en': 'Co workers',
    },
    'structur_subd': {
      'hy': 'Կառուցվածքային ստորաբաժանումներ',
      'ru': 'Структурные подразделения',
      'en': 'Structural subdivisions',
    },
    'board_directors': {
      'hy': 'Կառավարման խորհուրդ',
      'ru': 'Совет директоров',
      'en': 'Board of Directors',
    },
    'board_directors2': {
      'hy': 'Տնօրինական խորհուրդ',
      'ru': 'Совет директоров',
      'en': 'Board of Directors',
    },
    'edu_method_advice': {
      'hy': 'Ուսումնամեթոդական խորհուրդ',
      'ru': 'Учебно-методический совет',
      'en': 'Educational-methodological advice',
    },
    'board_edu': {
      'hy': 'Դաստիարակչական խորհուրդ',
      'ru': 'Министерство образования',
      'en': 'Board of Education',
    },
    'student_council': {
      'hy': 'Ուսանողական խորհուրդ',
      'ru': 'Студенческий совет',
      'en': 'Student Council',
    },
    'editorial_board': {
      'hy': 'Խմբագրական խորհուրդ',
      'ru': 'Редакционная коллегия',
      'en': 'Editorial Board',
    },
    'subj_commis': {
      'hy': 'Առարկայական հանձնաժողովներ',
      'ru': 'Предметные комиссии',
      'en': 'Subject commissions',
    },
    'career_center': {
      'hy': 'Կարիերայի կենտրոն',
      'ru': 'Карьерный центр',
      'en': 'Career center',
    },
    'library': {
      'hy': 'Գրադարան',
      'ru': 'Библиотека',
      'en': 'Library',
    },
    'pedag_council': {
      'hy': 'Մանկավարժական խորհուրդ',
      'ru': 'Педагогический совет',
      'en': 'Pedagogical Council',
    },
    'working_groups': {
      'hy': 'Աշխատանքային խմբեր',
      'ru': 'Рабочие группы',
      'en': 'Working groups',
    },
    'docs': {
      'hy': 'Փաստաթղթեր',
      'ru': 'Документы',
      'en': 'Documents',
    },
    'announcement': {
      'hy': 'Հայտարարություն',
      'ru': 'Объявление',
      'en': 'Announcement',
    },
    'student': {
      'hy': 'Ուսանող',
      'ru': 'Ученик',
      'en': 'Student',
    },
    'applicant': {
      'hy': 'Դիմորդ',
      'ru': 'Заявитель',
      'en': 'Applicant',
    },
    'quality': {
      'hy': 'Որակի ապահովում',
      'ru': 'Гарантия качества',
      'en': 'Quality assurance',
    },
    'contracts': {
      'hy': 'Պայմանագրեր',
      'ru': 'Контракты',
      'en': 'Contracts',
    },
    'with_student': {
      'hy': 'Ուսանողի հետ',
      'ru': 'Со студентом',
      'en': 'With the student',
    },
    'with_univer': {
      'hy': 'Բուհերի հետ',
      'ru': 'С университетами',
      'en': 'With universities',
    },
    'with_employ': {
      'hy': 'Գործատուների հետ',
      'ru': 'С работодателями',
      'en': 'With employers',
    },
    'with_organization': {
      'hy': 'Միջազգային կառույցների հետ',
      'ru': 'С международными организациями',
      'en': 'With international organizations',
    },
    'charter': {
      'hy': 'Կանոնադրություն',
      'ru': 'Устав',
      'en': 'Charter',
    },
    'strategic_plans': {
      'hy': 'Ռազմավարական ծրագրեր',
      'ru': 'Стратегические планы',
      'en': 'Strategic plans',
    },
    'regulation': {
      'hy': 'Կանոնակարգեր, աշխատակարգեր և ընթացակարգեր',
      'ru': 'Регламенты, процедуры и процедуры',
      'en': 'Regulations, procedures and procedures',
    },
    'laws': {
      'hy': 'Օրենքներ, հրամաններ և որոշումներ',
      'ru': 'Законы, указы и постановления',
      'en': 'Laws, orders and decisions',
    },
    'reports': {
      'hy': 'Հաշվետվություններ',
      'ru': 'Отчеты',
      'en': 'Reports',
    },
    'welcome': {
      'hy': 'ԲԱՐԻ ԳԱԼՈՒՍՏ',
      'ru': 'ДОБРО ПОЖАЛОВАТЬ',
      'en': 'WELCOME',
    },
    'collage_web-site': {
      'hy': 'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԿՐԹՈՒԹՅԱՆ, ԳԻՏՈՒԹՅԱՆ, ՄՇԱԿՈՒՅԹԻ ԵՎ ՍՊՈՐՏԻ ՆԱԽԱՐԱՐՈՒԹՅԱՆ ՎԱՅՈՑ ՁՈՐԻ ՏԱՐԱԾԱՇՐՋԱՆԱՅԻՆ ՊԵՏԱԿԱՆ ՔՈԼԵՋԻ ՊԱՇՏՈՆԱԿԱՆ ԿԱՅՔ',
      'ru': 'ОФИЦИАЛЬНЫЙ ВЕБ-САЙТ ВАЙОЦ ДЗОРСКОГО РЕГИОНАЛЬНОГО КОЛЛЕДЖА МИНИСТЕРСТВА ОБРАЗОВАНИЯ, НАУКИ, КУЛЬТУРЫ И СПОРТА МИНИСТЕРСТВА АРМЕНИИ',
      'en': 'OFFICIAL WEBSITE OF VAYOTS DZOR REGIONAL COLLEGE OF MINISTRY OF EDUCATION, SCIENCE, CULTURE AND SPORTS OF THE MINISTRY OF ARMENIA',
    },
    'info': {
      'hy': 'Մեր տեղեկատվական հարթակում Դուք հնարավորություն կունենաք ծանոթանալ ՎՁՏՊ քոլեջի առաքելությանը, անցած ուղուն, կառուցվածքային ստորաբաժանումներին, ինչպես նաև տեղեկանալ կրթական ծրագրերի, կազմակերպվող միջոցառումների, ձեռքբերումների և գրանցած հաջողությունների մասին:',
      'ru': 'На нашей информационной платформе у вас будет возможность познакомиться с миссией ВДОГК колледжа, путями, структурными подразделениями, а также получить информацию об образовательных программах, организованных мероприятиях, достижениях и успехах.',
      'en': 'In our information platform you will have the opportunity to get acquainted with the mission of VDRSC College, the way it has gone, the structural subdivisions, as well as to be informed about the educational programs, events organized, achievements and successes.',
    },
    'info2': {
      'hy': 'Ձեր դիտողություններն ու առաջարկությունները մեր գործունեության բարելավման և զարգացման առանցքային կետերն են:',
      'ru': 'Ваши замечания и предложения являются ключевыми моментами для улучшения и развития нашей деятельности.',
      'en': 'Your remarks and suggestions are the key points for the improvement and development of our activity.',
    },
    'home2': {
      'hy': 'Գլխավոր',
      'ru': 'Главная',
      'en': 'Home'
    },
    'profession2': {
      'hy': 'Մասնագիտություններ',
      'ru': 'Профессии',
      'en': 'Professions',
    },
    'feedback2': {
      'hy': 'Հետադարձ կապ',
      'ru': 'Обратная связь',
      'en': 'Feedback',
    },
    'title2': {
      'hy': 'Վայոց ձորի տարածաշրջանային պետական քոլեջ',
      'ru': 'Вайоцдзорский Областной Государственный Колледж',
      'en': 'Vayots Dzor Regional State Collage',
    },
  }



}
