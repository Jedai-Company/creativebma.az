import React, { useEffect, useState } from 'react'
import styles from '../styles/Partners.module.scss'
import stylesBtn from '../styles/Button.module.scss'
import Link from '../components/Link'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'
function partners() { 

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
      
    
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    
    const [partner1check, setpartner1check] = useState(1)
    const [partner2check, setpartner2check] = useState(1)
    const [partner3check, setpartner3check] = useState(1)
    
    const partner1Long = (langM === "AZ" && `East London Universiteti yaradıldı və bu gün də Şərqi London -da fəaliyyət göstərir. 1898-ci ildə West Ham Texnologiya İnstitutu olaraq işimizə başladıq və biznes ehtiyaclarını əvvəldən anlamaya başladıq. Bu gün mühasibat, təhsil, dəb, polis, memarlıq və turizmə qədər 160 fərqli kurs keçən 135 ölkədən 17.000 tələbəmiz var.  Şərqi London 3 kampusdan ibarətdir, biz isə şərqə doğru mədəniyyət ocağının mərkəzində Canary Wharf qapısında və Şəhər Hava Limanının yaxınlığındayıq. Beləliklə, yaxşı tanıdığımız müəssisələr və yerli icmalar arasında əlaqə yaradan bir təhsil mərkəziyik. Bu gün, dördüncü sənaye inqilabına qədəm qoyuruq,  İnternetin və idrak hesablamasının yüksəlməsi şirkətlərin fəaliyyətində və inkişafı üçün təkan verir.  Bu süni intellekt dövründə gələcək məzunları əmək bazarında fərqləndirəcək misilsiz insan bacarığı olduğunu qəbul edirik. Bunlara tənqidi düşünmə, yaradıcılıq, zəka və dayanıqlıq kimi yumşaq bacarıqların həmdə rəqəmsal səriştə kimi praktiki bacarıqlar da daxildir. Nailiyyətlərini təsdiqləmək üçün bütün tələbələrimizə karyera pasportu veririk. Bu digital depo hər şagirdin bilik səviyyəsinin sübut edir. Bu bacarıqlardan bəziləri Amazon və Microsoft kimi xarici təşkilatlar tərəfindən təsdiqlənəcək və bu vasitələrlə şagirdlər onlayn nişanlar alacaq, digərləri isə daxili olaraq izləniləcək və idarə ediləcəkdir. Təhsilin biznes ilə əl-ələ verməsinə ehtiyac olduğuna inanırıq. Bu səbəbdən Mental Wellness proqramımız ayrı vəziyyətdə işləmir - işəgötürənlərlə işləmək ənənəmizi davam etdirir. Bu proqram Londonda işəgötürənlərin potensialını müəyyənləşdirmək və geniş bir sıra yerli istedadları işə cəlb etməklə gələcəyin bacarıq boşluqlarını aradan qaldırmağa kömək edəcəkdir. İşəgötürənləri Mental Rifah proqramını dəstəkləməyə və İş Mərkəzimizdə qeydiyyatdan keçərək tələbə istedadlarımızla etibarlılığını artırmağa dəvət edirik. Bu əməkdaşlığın daha bir sübutu olaraq, Amazon Web Services (AWS) ilə qabaqcıl bir əməkdaşlığa başladıq. AWS, ilk kampus karyera zonamızın sənaye sponsoru olacaq, bilik mübadiləsi, öyrənmə və yeniliklər yolu ilə alimləri, tələbələri, mədəniyyəti və cəmiyyəti bir araya gətirən fiziki (və rəqəmsal) mərkəz olacaq. Bu əməkdaşlıq həm də süni intellekt kimi texnologiyalara əsaslanan iş bacarıqları üzrə ixtisaslaşmış bir mədəniyyət tədqiqat institutu yaradacaq və eyni zamanda bulud mütəxəssisi dərəcəsini də açacaq. Nəhayət, bu əməkdaşlığın effektivliyini vurğulamaq üçün 2019-cu ilin oktyabr ayında hər bir tələbəyə bulud hesablama bacarıqlarını təmin edən onlayn platforma olan AWS Təhsili əldə etmək imkanı verildi. Buludla işləyən işçilərə artan tələb ilə bu, gələcək nəsil İT və bulud mütəxəssisləri üçün akademik bir şlyuz təmin edir. Mental Wellness Proqramımız və AWS ilə ortaqlığımız sayəsində tələbələrimizə London müəssisələrinin gələcəkdə qarşılaşacaqları bacarıq boşluqlarını doldurmağa imkan veririk. https://www.uel.ac.uk/ `  || langM === "EN" && `The University of East London was founded and remains rooted in east London. We began life in 1898 as the West Ham Technical Institute and have understood the needs of business since the outset. Today we have 17,000 students from over 135 countries studying 160 different courses, ranging from accounting, education and fashion to policing, architecture and tourism. With three campuses in east London, we are at the heart of the industrial and creative shift east, on the doorstep of Canary Wharf and next to City Airport. As such we are the educational hub that provides the conduit and connection between businesses and the local communities we know intimately. Today, as we enter the Fourth Industrial Revolution, the growth of the internet of things and cognitive computing are creating another huge shift in the way companies work and the skills that are needed to thrive and adapt. In this age of artificial intelligence we recognise that it is the uniquely human skills that will set future graduates apart in the job market. These include soft skills, such as critical thinking, creativity, emotional intelligence and resilience, alongside practical skills, such as digital proficiency. As evidence of their achievements we give all our students a career passport. This digital repository is proof of students’ level of mastery in each skill. Some of these skills will be validated externally, by the likes of Amazon and Microsoft, earning students an online badge, while others will be monitored and managed internally. We are great believers in the need for education to work hand-in-hand with business. That is why our Mental Wealth programme does not operate in isolation – rather it continues our long tradition of employer collaboration. This programme will help London employers fill the skill gaps of the future, identifying potential today and recruiting from a diverse pool of local talent. We invite employers to endorse the Mental Wealth programme and to raise their profile with our student talent by registering on our Employment Hub. As further evidence of this co-operation, we have begun a ground-breaking collaboration with Amazon Web Services (AWS). AWS will be the industry sponsor of our first campus-based Career Zone, a physical (and digital) hub that brings together academics, students, industry and communities through shared knowledge, learning and innovation. This collaboration will also see the establishment of an industry research institute with a focus on technology-informed business skills, such as artificial intelligence and will include the launch of a cloud associate degree. Finally, to underline the effectiveness of this collaboration, in October 2019 every student was provided with access to AWS Educate, an online platform providing self-paced learning in cloud computing skills. With the increasing demand for cloud-savvy employees, this provides an academic gateway for the next generation of IT and cloud professionals. Through our Mental Wealth programme and AWS collaboration we are equipping our students to fill the future skills shortage facing London businesses.https://www.uel.ac.uk/ ` || langM === "RU" && `Университет Восточного Лондона был основан и по-прежнему находится в восточном Лондоне. Мы начали свою деятельность в 1898 году как Технический институт Вест Хэма и с самого начала понимали потребности бизнеса. Сегодня у нас 17 000 студентов из 135 стран, которые изучают 160 различных курсов, от бухгалтерского учета, образования и моды до полиции, архитектуры и имея три кампуса в восточном Лондоне, мы находимся в центре индустриального и творческого сдвига на восток, на пороге Кэнэри-Уорф и рядом с аэропортом Сити. Таким образом, мы являемся образовательным центром, который обеспечивает связь между предприятиями и местными сообществами, с которыми мы хорошо знакомы. Сегодня, когда мы вступаем в четвертую промышленную революцию, рост Интернета вещей и когнитивных вычислений вносит еще один огромный сдвиг в способ работы компаний и навыки, необходимые для процветания и адаптации. В наш век искусственного интеллекта мы осознаем, что именно уникальные человеческие навыки выделят будущих выпускников на рынке труда. К ним относятся мягкие навыки, такие как критическое мышление, креативность, эмоциональный интеллект и устойчивость, а также практические навыки, такие как владение цифровыми технологиями. В подтверждение их достижений мы даем всем нашим студентам паспорт карьеры. Этот цифровой репозиторий является доказательством уровня мастерства учащихся в каждом навыке. Некоторые из этих навыков будут подтверждены внешними организациями, такими как Amazon и Microsoft, за счет чего студенты получат онлайн-бейджи, в то время как другие будут контролироваться и управляться внутри компании. Мы твердо верим в необходимость того, чтобы образование работало рука об руку с бизнесом. Вот почему наша программа «Психическое благополучие» не работает изолированно - она ​​продолжает нашу давнюю традицию сотрудничества с работодателями. Эта программа поможет лондонским работодателям восполнить пробелы в навыках будущего, выявив потенциал сегодня и наняв широкий круг местных специалистов. Мы приглашаем работодателей поддержать программу «Психическое благополучие» и поднять свой авторитет с помощью наших студенческих талантов, зарегистрировавшись в нашем Центре трудоустройства. В качестве еще одного доказательства этого сотрудничества мы начали новаторское сотрудничество с Amazon Web Services (AWS). AWS станет отраслевым спонсором нашей первой зоны карьеры в кампусе, физического (и цифрового) центра, который объединяет ученых, студентов, представителей отрасли и сообщества посредством обмена знаниями, обучением и инновациями. В рамках этого сотрудничества также будет создан отраслевой научно-исследовательский институт, специализирующийся на бизнес-навыках, основанных на технологиях, таких как искусственный интеллект, а также будет запущена степень специалиста по облачным технологиям. Наконец, чтобы подчеркнуть эффективность этого сотрудничества, в октябре 2019 года каждому студенту был предоставлен доступ к AWS Educate, онлайн-платформе, обеспечивающей самостоятельное обучение навыкам облачных вычислений. В связи с растущим спросом на сотрудников, разбирающихся в облачных технологиях, это обеспечивает академический шлюз для следующего поколения ИТ-специалистов и специалистов по облачным технологиям. Благодаря нашей программе Mental Wealth и сотрудничеству с AWS мы даем нашим студентам возможность восполнить дефицит навыков, с которым в будущем столкнутся лондонские предприятия. https://www.uel.ac.uk/ `)
    const partner1short = (langM === "AZ" && `East London Universiteti yaradıldı və bu gün də Şərqi London -da fəaliyyət göstərir. 1898-ci ildə West Ham Texnologiya İnstitutu olaraq işimizə başladıq və biznes ehtiyaclarını əvvəldən anlamaya başladıq. Bu gün mühasibat, təhsil, dəb, polis, memarlıq və turizmə qədər 160 fərqli kurs keçən 135 ölkədən 17.000 tələbəmiz var. `  || langM === "EN" && `The University of East London was founded and remains rooted in east London. We began life in 1898 as the West Ham Technical Institute and have understood the needs of business since the outset. Today we have 17,000 students from over 135 countries studying 160 different courses, ranging from accounting, education and fashion to policing, architecture and tourism.` || langM === "RU" && `Университет Восточного Лондона был основан и по-прежнему находится в восточном Лондоне. Мы начали свою деятельность в 1898 году как Технический институт Вест Хэма и с самого начала понимали потребности бизнеса. Сегодня у нас 17 000 студентов из 135 стран, которые изучают 160 различных курсов, от бухгалтерского учета, образования и моды до полиции, архитектуры и туризма. `)
    
    const partner2Long = (langM === "AZ" && `Əvvəllər Azərbaycan Dövlət Konservatoriyası adlandırılan Üzeyir Hacıbəyli adına Bakı Musiqi Akademiyası 1921-ci il avqustun 21-də quruldu. Bakı Musiqi Akademiyasının yaradılmasında Görkəmli şəxsiyyət Azərbaycan klassik musiqisinin və peşəkar bəstəkarlıq məktəbinin böyük qurucusu, Azərbaycan musiqi mədəniyyətinin və musiqi təhsilinin inkişafında Üzeyir Hacıbəyli mühüm rol oynayaraq, əvəzsiz yer tutur. BMA, yüksək musiqi təhsilini inkişaf etdirmək, mədəni ifadələrin müxtəlifliyini qorumaq və təşviq etmək, daha geniş və daha balanslı mədəni mübadiləni təşviq etmək, müxtəlif mədəni ifadələrə hörmət göstərmək və bu cür müxtəlifliyin dəyərini daha da artırmaq məqsədi daşıyan mədəniyyətlər arasında dialoqu inkişaf etdirməkdə yerli, milli və beynəlxalq səviyyələrdə iştirak edir. Bakı Musiqi Akademiyasında fortepiano fakültəsində (fortepiano, orqan, klavesin), ifaçılıq fakültəsində (vokal, simlər, nəfəsli və zərb alətləri, pop və caz ifası) və tarix və musiqi nəzəriyyəsi (musiqişünaslıq, dirijorluq, etnomusikologiya) – də təhsil alan 650-dən çox tələbə var. Ayrıca 3 akademik laboratoriya var: Studio Məktəb (1981) və Opera Studio (1984). Bakı Musiqi Akademiyasında hazırlıq kursları və təhsil proqramlarıda mövcuddur: bakalavr dərəcəsi (4 il), magistr dərəcəsi (2 il), fəlsəfə doktoru (3 il), aspirant (2 il). Bakı Musiqi Akademiyasının təhsil sistemi çoxsəviyyəli təhsil sistemi və Bolonya prosesini tətbiq edərək son islahatlara qoşulub. Bir sıra tanınmış xarici professorlar: M. Rostropoviç, B. Davidoviç, D. Sitkovetskiy, M. Kabalye, E. Obraztsova, I. Moniketti, YoYo Ma, D. Mogilevskiy, M. Vengerov, N. Kokan, A. Bankas, A. Bonduryanskiy və başqaları master-klass və seminarlar üçün Bakı Musiqi Akademiyasına dəvət olunmuşdular. Bakı Musiqi Akademiyası hazırda Avropa Birliyinin EaPConnect layihəsi çərçivəsində GEANT (Avropa Elmi və Təhsil Şəbəkələri Birliyi) dəstəyi ilə LoLa (Aşağı Səsli və vizual Axın Sistemi) layihəsini həyata keçirən yeganə ali təhsil müəssisəsidir.  Layihə az gecikmə ilə uzaq məsafədə bir çox qurum arasında real vaxtda çıxışlara imkan verir. Bergen Universitetinin (Norveç) Grieg Akademiyası ilə bədii tədqiqat proqramında təcrübə inkişaf etdirmək üçün EURASIA layihəsi 10 ildən çoxdur ki, həyata keçirilən Bakı Musiqi Akademiyasının ən vacib beynəlxalq layihələrindən biridir. `  || langM === "EN" && `Baku Music Academy named after Uzeyir Hajibeyli, previously called Azerbaijan State Conservatory was established on August 21, 1921. The great founder of Azerbaijani classical music and professional composition school Uzeyir Hajibeyli who played a great role in the establishment of Baku Music Academy was an outstanding personality having a priceless place in the development of Azerbaijani music culture and music education.BMA is highly interested in the development of higher music education, protection and stimulation of variety of forms of cultural expression, stimulating a dialogue among cultures aimed at providing more broad and balanced cultural exchanges, promoting respect to a variety of forms of cultural expression and increasing the understanding of the value of such diversity on local, national and international levels.               Baku Music Academy has more than 650 students studying in the Piano faculty (piano, organ, harpsichord), Performing faculty (vocal, string instruments, wind and percussion instruments, pop and jazz performance) and Faculty of History and Theory of Music (composition, musicology, conducting, ethnomusicology). There are also 3 academic laboratories, School-studio (1981) and Opera Studio (1984). Baku Music Academy has preliminary courses and educational programs in Bachelor’s degree (4 years), Master’s degree (2 years), PhD (3 years), Post-Graduate Trainee (2 years).         The educational system of Baku Music Academy has joined the latest reforms by implementing the multilevel educational system and Bologna process. A number of very famous foreign professors such as M.Rоstropovich, B.Davidovich, D.Siтkovетskiy, M.Kabalye, E.Obraztsova, İ.Moniqetti, YoYo Ma, D.Mogilevsky, M.Vengerov, N.Koqan, A.Bankas, A. Bonduryanski etc. have been invited to Baku Music Academy to hold master classes and seminars.                      Baku Music Academy is currently the only higher education institution in Azerbaijan that has been implementing LoLa (Low Latency Audio-visual Streaming System) project with support of GEANT (European Association of Science and Education Networks) within the framework of the EaPConnect project of the European Commission. The project enables to organize real-time performances among several institutions at a remote distance with very low latency. EURASIA project with the Grieg Academy of the University of Bergen (Norway) for developing expertise in the Artistic Research programme is one of the most important international projects of Baku Music Academy, which is being realized for more than 10 years.` || langM === "RU" && `Бакинская музыкальная академия имени Узеира Гаджибейли, ранее называвшаяся Азербайджанской государственной консерваторией, была основана 21 августа 1921 года. Узеир Гаджибейли великий основатель азербайджанской классической музыки и профессиональной школы композиции, занимавший бесценное место в развитии азербайджанской музыкальной культуры и музыкального образования, сыграл большую роль в создании Бакинской музыкальной академии. БМА очень заинтересована в развитии высшего музыкального образования, защите и стимулировании разнообразия форм культурного самовыражения, стимулировании диалога между культурами, направленном на обеспечение более широкого и сбалансированного культурного обмена, поощрение уважения к разнообразным формам культурного самовыражения и увеличение понимание ценности такого разнообразия на местном, национальном и международном уровнях. Бакинская Музыкальная Академия насчитывает более 650 студентов, обучающихся на фортепианном факультете (фортепиано, орган, клавесин), исполнительском факультете (вокал, струнные инструменты, духовые и ударные инструменты, эстрадное и джазовое исполнение) и факультете истории и теории музыки (композиция, музыкальное сопровождение). музыковедение, дирижирование, этномузыкология). Также имеются 3 академические лаборатории: Школа-студия (1981) и Оперная студия (1984). Бакинская Музыкальная Академия имеет подготовительные курсы и образовательные программы: бакалавриат (4 года), магистр (2 года), PhD (3 года), аспирант (2 года). Образовательная система Бакинской Музыкальной Академии присоединилась к последним реформам, внедрив многоуровневую систему образования и Болонский процесс. Ряд известных зарубежных профессоров, таких как М.Ростропович, Б.Давидович, Д.Ситковетский, М.Кабалье, Е.Образцова, И.Моникетти, ЙоЙо Ма, Д.Могилевский, М.Венгеров, Н.Кокан, А. Банкас, А.Бондурянский и др. Приглашены в Бакинскую Музыкальную Академию для проведения мастер-классов и семинаров. Бакинская Музыкальная Академия в настоящее время является единственным высшим учебным заведением в Азербайджане, которое реализует проект LoLa (Low Latency Audio-visual Streaming System) при поддержке GEANT (Европейская ассоциация научных и образовательных сетей) в рамках европейского проекта EaPConnect. Комиссия. Проект позволяет организовать выступления в реальном времени между несколькими учреждениями на удаленном расстоянии с очень малой задержкой. Проект EURASIA с Академией Грига Университета Бергена (Норвегия) по развитию опыта в программе художественных исследований - один из важнейших международных проектов Бакинской Музыкальной Академии, который реализуется более 10 лет. `)
    const partner2short = (langM === "AZ" && `Əvvəllər Azərbaycan Dövlət Konservatoriyası adlandırılan Üzeyir Hacıbəyli adına Bakı Musiqi Akademiyası 1921-ci il avqustun 21-də quruldu. Bakı Musiqi Akademiyasının yaradılmasında Görkəmli şəxsiyyət Azərbaycan klassik musiqisinin və peşəkar bəstəkarlıq məktəbinin böyük qurucusu, Azərbaycan musiqi mədəniyyətinin və musiqi təhsilinin inkişafında Üzeyir Hacıbəyli mühüm rol oynayaraq, əvəzsiz yer tutur. `  || langM === "EN" && `Baku Music Academy named after Uzeyir Hajibeyli, previously called Azerbaijan State Conservatory was established on August 21, 1921. The great founder of Azerbaijani classical music and professional composition school Uzeyir Hajibeyli who played a great role in the establishment of Baku Music Academy was an outstanding personality having a priceless place in the development of Azerbaijani music culture and music education.  ` || langM === "RU" && `Бакинская музыкальная академия имени Узеира Гаджибейли, ранее называвшаяся Азербайджанской государственной консерваторией, была основана 21 августа 1921 года. Узеир Гаджибейли великий основатель азербайджанской классической музыки и профессиональной школы композиции, занимавший бесценное место в развитии азербайджанской музыкальной культуры и музыкального образования, сыграл большую роль в создании Бакинской музыкальной академии. `)
    
    const partner3Long = (langM === "AZ" && `East London Universiteti yaradıldı və bu gün də Şərqi London -da fəaliyyət göstərir. 1898-ci ildə West Ham Texnologiya İnstitutu olaraq işimizə başladıq və biznes ehtiyaclarını əvvəldən anlamaya başladıq. Bu gün mühasibat, təhsil, dəb, polis, memarlıq və turizmə qədər 160 fərqli kurs keçən 135 ölkədən 17.000 tələbəmiz var.  Şərqi London 3 kampusdan ibarətdir, biz isə şərqə doğru mədəniyyət ocağının mərkəzində Canary Wharf qapısında və Şəhər Hava Limanının yaxınlığındayıq. Beləliklə, yaxşı tanıdığımız müəssisələr və yerli icmalar arasında əlaqə yaradan bir təhsil mərkəziyik. Bu gün, dördüncü sənaye inqilabına qədəm qoyuruq,  İnternetin və idrak hesablamasının yüksəlməsi şirkətlərin fəaliyyətində və inkişafı üçün təkan verir. Bu süni intellekt dövründə gələcək məzunları əmək bazarında fərqləndirəcək misilsiz insan bacarığı olduğunu qəbul edirik. Bunlara tənqidi düşünmə, yaradıcılıq, zəka və dayanıqlıq kimi yumşaq bacarıqların həmdə rəqəmsal səriştə kimi praktiki bacarıqlar da daxildir. Nailiyyətlərini təsdiqləmək üçün bütün tələbələrimizə karyera pasportu veririk. Bu digital depo hər şagirdin bilik səviyyəsinin sübut edir. Bu bacarıqlardan bəziləri Amazon və Microsoft kimi xarici təşkilatlar tərəfindən təsdiqlənəcək və bu vasitələrlə şagirdlər onlayn nişanlar alacaq, digərləri isə daxili olaraq izləniləcək və idarə ediləcəkdir. Təhsilin biznes ilə əl-ələ verməsinə ehtiyac olduğuna inanırıq. Bu səbəbdən Mental Wellness proqramımız ayrı vəziyyətdə işləmir - işəgötürənlərlə işləmək ənənəmizi davam etdirir. Bu proqram Londonda işəgötürənlərin potensialını müəyyənləşdirmək və geniş bir sıra yerli istedadları işə cəlb etməklə gələcəyin bacarıq boşluqlarını aradan qaldırmağa kömək edəcəkdir. İşəgötürənləri Mental Rifah proqramını dəstəkləməyə və İş Mərkəzimizdə qeydiyyatdan keçərək tələbə istedadlarımızla etibarlılığını artırmağa dəvət edirik. Bu əməkdaşlığın daha bir sübutu olaraq, Amazon Web Services (AWS) ilə qabaqcıl bir əməkdaşlığa başladıq. AWS, ilk kampus karyera zonamızın sənaye sponsoru olacaq, bilik mübadiləsi, öyrənmə və yeniliklər yolu ilə alimləri, tələbələri, mədəniyyəti və cəmiyyəti bir araya gətirən fiziki (və rəqəmsal) mərkəz olacaq. Bu əməkdaşlıq həm də süni intellekt kimi texnologiyalara əsaslanan iş bacarıqları üzrə ixtisaslaşmış bir mədəniyyət tədqiqat institutu yaradacaq və eyni zamanda bulud mütəxəssisi dərəcəsini də açacaq. Nəhayət, bu əməkdaşlığın effektivliyini vurğulamaq üçün 2019-cu ilin oktyabr ayında hər bir tələbəyə bulud hesablama bacarıqlarını təmin edən onlayn platforma olan AWS Təhsili əldə etmək imkanı verildi. Buludla işləyən işçilərə artan tələb ilə bu, gələcək nəsil İT və bulud mütəxəssisləri üçün akademik bir şlyuz təmin edir. Mental Wellness Proqramımız və AWS ilə ortaqlığımız sayəsində tələbələrimizə London müəssisələrinin gələcəkdə qarşılaşacaqları bacarıq boşluqlarını doldurmağa imkan veririk. https://www.uel.ac.uk/ `  || langM === "EN" && `The University of East London was founded and remains rooted in east London. We began life in 1898 as the West Ham Technical Institute and have understood the needs of business since the outset. Today we have 17,000 students from over 135 countries studying 160 different courses, ranging from accounting, education and fashion to policing, architecture and tourism. With three campuses in east London, we are at the heart of the industrial and creative shift east, on the doorstep of Canary Wharf and next to City Airport. As such we are the educational hub that provides the conduit and connection between businesses and the local communities we know intimately. Today, as we enter the Fourth Industrial Revolution, the growth of the internet of things and cognitive computing are creating another huge shift in the way companies work and the skills that are needed to thrive and adapt. In this age of artificial intelligence we recognise that it is the uniquely human skills that will set future graduates apart in the job market. These include soft skills, such as critical thinking, creativity, emotional intelligence and resilience, alongside practical skills, such as digital proficiency. As evidence of their achievements we give all our students a career passport. This digital repository is proof of students’ level of mastery in each skill. Some of these skills will be validated externally, by the likes of Amazon and Microsoft, earning students an online badge, while others will be monitored and managed internally. We are great believers in the need for education to work hand-in-hand with business. That is why our Mental Wealth programme does not operate in isolation – rather it continues our long tradition of employer collaboration. This programme will help London employers fill the skill gaps of the future, identifying potential today and recruiting from a diverse pool of local talent. We invite employers to endorse the Mental Wealth programme and to raise their profile with our student talent by registering on our Employment Hub. As further evidence of this co-operation, we have begun a ground-breaking collaboration with Amazon Web Services (AWS). AWS will be the industry sponsor of our first campus-based Career Zone, a physical (and digital) hub that brings together academics, students, industry and communities through shared knowledge, learning and innovation. This collaboration will also see the establishment of an industry research institute with a focus on technology-informed business skills, such as artificial intelligence and will include the launch of a cloud associate degree. Finally, to underline the effectiveness of this collaboration, in October 2019 every student was provided with access to AWS Educate, an online platform providing self-paced learning in cloud computing skills. With the increasing demand for cloud-savvy employees, this provides an academic gateway for the next generation of IT and cloud professionals. Through our Mental Wealth programme and AWS collaboration we are equipping our students to fill the future skills shortage facing London businesses.https://www.uel.ac.uk/ ` || langM === "RU" && `Университет Восточного Лондона был основан и по-прежнему находится в восточном Лондоне. Мы начали свою деятельность в 1898 году как Технический институт Вест Хэма и с самого начала понимали потребности бизнеса. Сегодня у нас 17 000 студентов из 135 стран, которые изучают 160 различных курсов, от бухгалтерского учета, образования и моды до полиции, архитектуры и Имея три кампуса в восточном Лондоне, мы находимся в центре индустриального и творческого сдвига на восток, на пороге Кэнэри-Уорф и рядом с аэропортом Сити. Таким образом, мы являемся образовательным центром, который обеспечивает связь между предприятиями и местными сообществами, с которыми мы хорошо знакомы. Сегодня, когда мы вступаем в четвертую промышленную революцию, рост Интернета вещей и когнитивных вычислений вносит еще один огромный сдвиг в способ работы компаний и навыки, необходимые для процветания и адаптации. В наш век искусственного интеллекта мы осознаем, что именно уникальные человеческие навыки выделят будущих выпускников на рынке труда. К ним относятся мягкие навыки, такие как критическое мышление, креативность, эмоциональный интеллект и устойчивость, а также практические навыки, такие как владение цифровыми технологиями. В подтверждение их достижений мы даем всем нашим студентам паспорт карьеры. Этот цифровой репозиторий является доказательством уровня мастерства учащихся в каждом навыке. Некоторые из этих навыков будут подтверждены внешними организациями, такими как Amazon и Microsoft, за счет чего студенты получат онлайн-бейджи, в то время как другие будут контролироваться и управляться внутри компании. Мы твердо верим в необходимость того, чтобы образование работало рука об руку с бизнесом. Вот почему наша программа «Психическое благополучие» не работает изолированно - она ​​продолжает нашу давнюю традицию сотрудничества с работодателями. Эта программа поможет лондонским работодателям восполнить пробелы в навыках будущего, выявив потенциал сегодня и наняв широкий круг местных специалистов. Мы приглашаем работодателей поддержать программу «Психическое благополучие» и поднять свой авторитет с помощью наших студенческих талантов, зарегистрировавшись в нашем Центре трудоустройства. В качестве еще одного доказательства этого сотрудничества мы начали новаторское сотрудничество с Amazon Web Services (AWS). AWS станет отраслевым спонсором нашей первой зоны карьеры в кампусе, физического (и цифрового) центра, который объединяет ученых, студентов, представителей отрасли и сообщества посредством обмена знаниями, обучением и инновациями. В рамках этого сотрудничества также будет создан отраслевой научно-исследовательский институт, специализирующийся на бизнес-навыках, основанных на технологиях, таких как искусственный интеллект, а также будет запущена степень специалиста по облачным технологиям. Наконец, чтобы подчеркнуть эффективность этого сотрудничества, в октябре 2019 года каждому студенту был предоставлен доступ к AWS Educate, онлайн-платформе, обеспечивающей самостоятельное обучение навыкам облачных вычислений. В связи с растущим спросом на сотрудников, разбирающихся в облачных технологиях, это обеспечивает академический шлюз для следующего поколения ИТ-специалистов и специалистов по облачным технологиям. Благодаря нашей программе Mental Wealth и сотрудничеству с AWS мы даем нашим студентам возможность восполнить дефицит навыков, с которым в будущем столкнутся лондонские предприятия. https://www.uel.ac.uk/ `)
    const partner3short = (langM === "AZ" && `Azərbaycan Dövlət İqtisad Universiteti (UNEC) 18 mindən çox tələbəsi olan bir dövlət universitetidir. QS Dünya Universiteti, UNEC-i Avropa və Orta Asiyanın inkişaf etməkdə olan ölkələri bölgəsindəki iqtisadi ixtisaslaşmış universitetlər arasında 4-cü yeri tutur. UNEC-in beynəlxalq iqtisadiyyat, maliyyə, bank işi, menecment, marketinq və reklam, iş idarəetməsi və mühasibat sahəsindəki gücü qlobal əməkdaşlığı və tərəfdaşlığı kritik hala gətirir. Əslində UNEC, London İqtisadiyyat Məktəbi (LSE), Lincoln Universiteti (ABŞ), Montpellier Universiteti (Fransa) və UBIS (İsveçrə) kimi beynəlxalq ali təhsil müəssisələri (HEIs) ilə əməkdaşlıq edərək ikiqat və birgə dərəcələr tətbiq edən ilk qurumlardan biridir. `  || langM === "EN" && `Azerbaijan State University of Economics (UNEC) is a state university with more than 18,000 students. QS World University ranks UNEC 4th among universities with an economics focus in the Emerging Europe and Central Asia region. UNEC’s strength in international economics, finance, banking, management, marketing and advertising, business administration, and accounting make global cooperation and partnerships critical. In effect, UNEC is one of the first institutions to implement double and joint diplomas, in collaboration with international higher education institutions (HEIs) such as the London School of Economics (LSE), Lincoln University (USA), Montpellier University (France) and UBIS (Switzerland).` || langM === "RU" && `Азербайджанский Государственный Экономический Университет (UNEC) - государственный университет, в котором обучается более 18 000 студентов. QS World University ставит UNEC на 4-е место среди университетов с экономической специализацией в регионе развивающихся стран Европы и Центральной Азии. Сила UNEC в области международной экономики, финансов, банковского дела, менеджмента, маркетинга и рекламы, делового администрирования и бухгалтерского учета делает глобальное сотрудничество и партнерство критически важными. Фактически UNEC является одним из первых институтов, внедривших двойные и совместные дипломы в сотрудничестве с международными высшими учебными заведениями (ВУЗами), такими как Лондонская школа экономики (LSE), Университет Линкольна (США), Университет Монпелье (Франция) и UBIS (Швейцария). `)
    
    
    
    return (
        <>
            <Head>
                <title>{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `Партнеры`}</title>
            </Head>

            <div className={styles.partnersPage + " page "} >
                <Link link={langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `Партнеры`} />
                <h1 data-aos="fade-up" className={styles.aboutTitle + " title-b-desk  pageTitle"} >{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `Партнеры`}</h1>

                <div className={styles.partners}>
                    <div className={styles.partner}  >
                        <div className={styles.imgTitle} data-aos="fade-right"><img src="/eastLondon.svg" alt="East-London-Logo"/> <h2 className={'title-e-desk'}>{langM === "AZ" && `Şərq London Universiteti (UEL)` || langM === "EN" && `University of East London (UEL) ` || langM === "RU" && `Университет Восточного Лондона (UEL) `}</h2></div>
                        <p className={styles.text + " text"} data-aos="fade-right">
                            {!partner1check ? <div data-aos="fade-right">{partner1Long}</div>  : <div  data-aos="fade-right"> {partner1short}</div>}
                        </p>
                        <button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"} id='partner1' onClick={() => setpartner1check(!partner1check)}>{ partner1check ? (langM === "AZ" && `Daha ətraflı` || langM === "EN" && `More About` || langM === "RU" && `Читать далее`) : (langM === "AZ" && `Daha az` || langM === "EN" && `Hide` || langM === "RU" && `Спрятать`) }  {partner1check ? (<span>&nbsp; &nbsp; &#x2193;</span>) : (<span>&nbsp; &nbsp; &uarr;</span>)	} </button>
                    </div>

                    <div className={styles.partner}>
                        <div className={styles.imgTitle} data-aos="fade-right"><img src="/bakimusicacademy.svg" alt="East-London-Logo"/> <h2 className={'title-e-desk'}>{langM === "AZ" && `Üzeyir Hacıbəyli adına Bakı Musiqi Akademiyası (BMA) ` || langM === "EN" && `Baku Music Academy named after Uzeyir Hajibeyli (BMA) ` || langM === "RU" && `Бакинская Музыкальная Академия имени Узеира Гаджибейли (БМА) `}</h2></div>
                        <p className={styles.text + " text"} data-aos="fade-right">
                            {!partner2check ? partner2Long : partner2short}
                        </p>
                        <button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"} id='partner2' onClick={() => setpartner2check(!partner2check)}>{ partner2check ? (langM === "AZ" && `Daha ətraflı` || langM === "EN" && `More About` || langM === "RU" && `Читать далее`) : (langM === "AZ" && `Daha az` || langM === "EN" && `Hide` || langM === "RU" && `Спрятать`) }  {partner2check ? (<span>&nbsp; &nbsp; &#x2193;</span>) : (<span>&nbsp; &nbsp; &uarr;</span>)	}</button>
                    </div>
                    
                    <div className={styles.partner}>
                        <div className={styles.imgTitle} data-aos="fade-right"><img src="/unec.svg" width='118' height='auto' alt="East-London-Logo"/> <h2 className={'title-e-desk'}>{langM === "AZ" && `Azərbaycan Dövlət İqtisad Universiteti (UNEC)` || langM === "EN" && `Azerbaijan State University of Economics (UNEC)  ` || langM === "RU" && `Азербайджанский Государственный Экономический Университет (UNEC)`}</h2></div>
                        <p className={styles.text + " text"} data-aos="fade-right">
                            {!partner3check ? partner3Long : partner3short}
                        </p>
                        <button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"} id='partner1' onClick={() => setpartner3check(!partner3check)}>{ partner3check ? (langM === "AZ" && `Daha ətraflı` || langM === "EN" && `More About` || langM === "RU" && `Читать далее`) : (langM === "AZ" && `Daha az` || langM === "EN" && `Hide` || langM === "RU" && `Спрятать`) }  {partner3check ? (<span>&nbsp; &nbsp; &#x2193;</span>) : (<span>&nbsp; &nbsp; &uarr;</span>)	}</button>
                    </div>

                    <div className={styles.partner} >
                        <div className={styles.imgTitle} data-aos="fade-right"><img  src="/britishcouncil.png" width='300px' alt="British-Council"/> <h2 className={'title-e-desk'}>{langM === "AZ" && `British Council ` || langM === "EN" && `British Council ` || langM === "RU" && `British Council`} </h2></div>
                        <p className={styles.text + " text"} data-aos="fade-right">
                            {langM === "AZ" && `British Council, İngiltərənin mədəni əlaqələr və təhsil imkanlarını təmsil edən beynəlxalq təşkilatdır. Altı qitədə və 100-dən çox ölkədə fəaliyyət göstərərək beynəlxalq imkanlarını hər gün həyata keçirir. Haqqımızda daha çox məlumat əldə etmək üçün: https://www.britishcouncil.az/az/about ` 
                            || langM === "EN" && `The British Council is the UK’s international organization for cultural relations and educational opportunities. We are on the ground in six continents and over 100 countries, bringing international opportunity to life, every day. Find out more about us. https://www.britishcouncil.az/en/about ` 
                            || langM === "RU" && `Британский Совет – это международная организация, представляющая Великобританию в области культуры и образования. Мы работаем в более чем 100 странах на шести континентах, создавая возможности международного сотрудничества каждый день. Узнайте о нашей работе больше. https://www.britishcouncil.az/en/about `}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default partners
