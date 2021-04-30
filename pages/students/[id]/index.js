import React, { useEffect, useState } from 'react'
import styles from '../../../styles/SelectedStudent.module.scss'
import stylesBtn from '../../../styles/Button.module.scss'
import parse from 'html-react-parser';
import Link from '../../../components/Link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import MaskedInput from "react-text-mask";
//Formik
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as yup from 'yup';
//Formik

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Toast

//Select 
import Select from 'react-select'
//Select

//Material UI 
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow:'auto',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
//Material UI 
const phoneNumberMask = ["+","9","9","4", /\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,];
const timeMask = [/[0-1]/ , /\d/ , ":", /[0-6]/, /\d/,];

function index({student}) {
    // const notify = () => toast.info("Sorğunuz göndərildi!");
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const buttonsMQ = useMediaQuery('(min-width:1067px)');
    const titleMQ = useMediaQuery('(min-width:557px)');
    
    
    const router = useRouter()
    const { id } = router.query
    const [studentData, setstudentData] = useState(student)
    const studentImg = {
        backgroundImage:`url(https://creativespark.testjed.me${studentData?.image})`
    }



//ModalsModals
    //Modal1
        const classes = useStyles();
        const [open, setOpen] = useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
    //Modal1
    //Modal2
        const classes2 = useStyles();
        const [open2, setOpen2] = useState(false);

        const handleOpen2 = () => {
            setOpen2(true);
        };

        const handleClose2 = () => {
            setOpen2(false);
        };
    //Modal2
//ModalsModals


    //Notify
        const notify = () => toast.info("Hesabınız müvəffəqiyyətlə yaradıldı!");
        const notifySend = () => toast.info("Sorğunuz müvəffəqiyyətlə göndərildi!");
    //Notify





    //Formik1
    //Onchange
        const optionsTypeOfEvent = [
            { value: 'wedding', label: 'Wedding' },
            { value: 'birthday', label: 'Birthday' },
            { value: 'proposal', label: 'Proposal' },
            { value: 'party', label: 'Party' },
            { value: 'recital', label: 'Recital' },
            { value: 'other', label: 'Other' },
        ]
        const [eventType, seteventType] = useState(optionsTypeOfEvent[1].value)
        const eventTypeChange = (value) => {
            seteventType(value.value)
        }
    //Onchange
        const optionsTypeOfMusic = [
            { value: 'classical', label: 'Classical' },
            { value: 'Jazz', label: 'Jazz' },
            { value: 'pop', label: 'Pop' },
            { value: 'other', label: 'Other' },
        ]
        const [musicType, setMusicType] = useState(optionsTypeOfMusic[0].value)
        const musicTypeChange = (value) => {
            setMusicType(value.value)
        }
    //Onchange
        const optionsTypeOfMusician = [
            { value: 'wedding', label: 'Piano' },
            { value: 'birthday', label: 'Classical string quartet' },
            { value: 'proposal', label: 'Voice and piano' },
        ]
        const [musicianType, setMusicianType] = useState(optionsTypeOfEvent[0].value)
        const musicianTypeChange = (value) => {
            setMusicianType(value.value)
        }
        const [eventDate, seteventDate] = useState('04/19/2021')
        const [eventTime, seteventTime] = useState('12:00')
    //Onchange
        const [request, setrequest] = useState(false)
        const phoneRegExp = /^\+[1-9]{1}[0-9]{1,14}$/
        const initialValues = {
            name:'',
            email:'',
            phone:'',
            address:'',
            company:'',
            notes: '',
            eventTime:'',
        }
        const onSubmit =  (values) => {
            notify()
            const data = {
                user_id : id,
                fullname : values.name,
                email : values.email,
                tel : values.phone,
                tedbir_tarix : eventDate,
                tedbir_nov : eventType,
                tedbir_vaxt : values.eventTime,
                musiqi_janr : musicType,
                musiqi_nov : musicianType,
                tedbir_unvan  : values.address,
                teskilat : values.company,
                qeyd : values.notes,
            }
            // axios.post('https://jsonplaceholder.typicode.com/posts',data)
            //     .then(res => console.log(res))
            axios.post('https://creativespark.testjed.me/api/hire-student',data)
                .then(res => (  res.status === 200 && ( handleClose()  , setrequest(true)) ) ) 
        }
        
        notifySend()
        notifySend()
        notifySend()
        notifySend()

        const validationSchema = yup.object({
            name: yup.string().required(langM === "AZ" && `Ad, Soyadınızı daxil edin` || langM === "EN" && `Enter your first and last name` || langM === "RU" && `Введите ваше имя и фамилию`),
            phone:  yup.string().matches(phoneRegExp, (langM === "AZ" && `Telefon nömrəsini düzgün daxil edin` || langM === "EN" && `Enter the phone number correctly` || langM === "RU" && `Введите номер телефона правильно`)).required(langM === "AZ" && `Telefon nömrənizi daxil edin` || langM === "EN" && `Enter your phone number` || langM === "RU" && `Введите свой номер телефона`),
            email: yup.string().email(langM === "AZ" && `Elektron poçtunuzu düzgün daxil edin` || langM === "EN" && `Enter your email correctly` || langM === "RU" && `Введите свой адрес электронной почты правильно`).required(langM === "AZ" && `Elektron poçtunuzu daxil edin` || langM === "EN" && `Enter your email` || langM === "RU" && `Введите адрес электронной почты`),
            address: yup.string().required(langM === "AZ" && `Ünvanınızı daxil edin` || langM === "EN" && `Enter your address` || langM === "RU" && `Введите ваш адрес`),
            eventTime: yup.string().required(langM === "AZ" && `Tədbir saatını daxil edin` || langM === "EN" && `Enter the event time` || langM === "RU" && `Введите время события`),
        })
    //Formik1

    //Formik2
        const onSubmit2 =  (values) => {
            const data = { 
                user_id: id,
                name : values.name2,
                email : values.email2,
                phone : values.phone2,
                lessonType : values.lessonType
            }
            axios.post('https://creativespark.testjed.me/api/hire-teacher', data )
                .then(res => res.status === 200 && handleClose2())
        }
        
        const initialValues2 = {
            name2:'',
            email2:'',
            phone2:'',
            lessonType:'',
        }

        const validationSchema2 = yup.object({
            name2: yup.string().required(langM === "AZ" && `Ad, Soyadınızı daxil edin` || langM === "EN" && `Enter your first and last name` || langM === "RU" && `Введите ваше имя и фамилию`),
            phone2:  yup.string().matches(phoneRegExp, (langM === "AZ" && `Telefon nömrəsini düzgün daxil edin` || langM === "EN" && `Enter the phone number correctly` || langM === "RU" && `Введите номер телефона правильно`)).required(langM === "AZ" && `Telefon nömrənizi daxil edin` || langM === "EN" && `Enter your phone number` || langM === "RU" && `Введите свой номер телефона`),
            email2: yup.string().email(langM === "AZ" && `Elektron poçtunuzu düzgün daxil edin` || langM === "EN" && `Enter your email correctly` || langM === "RU" && `Введите свой адрес электронной почты правильно`).required(langM === "AZ" && `Elektron poçtunuzu daxil edin` || langM === "EN" && `Enter your email` || langM === "RU" && `Введите адрес электронной почты`),
            lessonType: yup.string().required(langM === "AZ" && `Dərsin növünü daxil edin` || langM === "EN" && `Enter the type of lesson` || langM === "RU" && `Введите тип урока`),
        })
    //Formik2


    return (
        <>
            <Head>
                <title>{langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`}</title>
            </Head>
            <div className={styles.singleStudentPage + " page"}>
                <Link link={langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`} href='/students' link2={studentData?.name_surname}/>
                {
                    buttonsMQ  &&
                    <div data-aos="fade-right" className={styles.buttonsCont}>
                        <button className={stylesBtn.buttonEffect + " button-text"} onClick={handleOpen}>{langM === "AZ" && `İfaçı işə götür` || langM === "EN" && `Hire a performer` || langM === "RU" && `Нанять исполнителя`}</button>
                        <button className={stylesBtn.buttonEffect2 + "  button-blue-text mt20"} onClick={handleOpen2}>{langM === "AZ" && `Şəxsi müəllim işə götür` || langM === "EN" && `Hire a private tutor` || langM === "RU" && `Нанять частного репетитора`}</button>
                    </div>
                }
                <div className={styles.imgAndAbout + " mt20"}>
                    <div data-aos="fade-right" className={styles.studentAvatar + " img"} style={studentImg}></div>
                    {
                            !titleMQ && 
                            <div data-aos="fade-right" className={styles.titles}>
                                <h1 className={styles.titleStudent + " title title-e-desk mt20"}>{studentData?.name_surname} </h1>
                                <h2 className={styles.subtitleStudent + " title top-title-b mt10"}>{studentData?.position}</h2>
                            </div>
                    }
                    {
                        !buttonsMQ  &&
                        <div data-aos="fade-down" className={styles.buttonsCont}>
                            <button className={stylesBtn.buttonEffect + " button-text"} onClick={handleOpen}>{langM === "AZ" && `İfaçı işə götür` || langM === "EN" && `Hire a performer` || langM === "RU" && `Нанять исполнителя`}</button>
                            <button className={stylesBtn.buttonEffect2 + "  button-blue-text mt20"} onClick={handleOpen2}>{langM === "AZ" && `Şəxsi müəllim işə götür` || langM === "EN" && `Hire a private tutor` || langM === "RU" && `Нанять частного репетитора`}</button>
                        </div>
                    }
                    <div className={styles.textAbout}>
                        {
                            titleMQ && 
                            <>
                                <h1  data-aos="fade-right"   className={styles.titleStudent + " title title-e-desk mt20"}>{studentData?.name_surname}  </h1>
                                <h2  data-aos="fade-right"   className={styles.subtitleStudent + " title top-title-b mt10"}>{studentData?.position}</h2>
                            </>
                        }
                        <p  data-aos="fade-right"   className={styles.studentText + " text mt20"}>
                            {parse(`${studentData?.content}`)}
                        </p>
                    </div>
                </div>
                <div   className={styles.studentText2 + " text mt30"}>
                    <p className="text" data-aos="fade-up">
                        {parse(`${studentData?.content2}`)}
                    </p>
                </div>
                
                



    {/* Modal and Forms */}{/* Modal and Forms */}{/* Modal and Forms */}

            {/* Modal1 */}
                <Modal aria-labelledby="transition-modal-title"  aria-describedby="transition-modal-description" className={classes.modal} open={open} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>
                    <Fade in={open} >
                        <div className={styles.modalHireWorker}>
                            <button className={styles.closeButton} onClick={handleClose}>&#10006;</button>
                            <h2 className={styles.titleModal + " title-e-desk "}>{langM === "AZ" && `Birdəfəlik tədbir üçün ifaçı çağırın` || langM === "EN" && `Hire a performer for a one-time event` || langM === "RU" && `Нанять исполнителя на разовое мероприятие`}</h2>
                            <h3 className={styles.subTitleModal + " top-title-b"}>{langM === "AZ" && `Xüsusi bir tədbir üçün bir musiqiçi işə götürmək istəyirsinizsə, zəhmət olmazsa bu formu doldurun.` || langM === "EN" && `If you want to hire a musician for a special event, please complete this form.` || langM === "RU" && `Если вы хотите нанять музыканта для особого мероприятия, заполните эту форму.`}</h3>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                                <Form  className={styles.formCont + ' mt20'} method="POST" action="">
                                    <div className={styles.inputCont}>
                                        <label htmlFor="name" className={styles.label + " text"}>{langM === "AZ" && `Ad, Soyad*` || langM === "EN" && `First name and last name*` || langM === "RU" && `Имя и фамилия*`}</label>
                                        <Field className={styles.input + " text"} name='name' placeholder={langM === "AZ" && `Ad, Soyad*` || langM === "EN" && `First name and last name*` || langM === "RU" && `Имя и фамилия*`} type="text"/>
                                        <p className={styles.error + " text"}><ErrorMessage name='name'/></p>
                                    </div>
                                    
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="phone" className={styles.label + " text"}>{langM === "AZ" && `Telefon*` || langM === "EN" && `Phone*` || langM === "RU" && `Телефон*`}</label>
                                        <Field className={styles.input + " text"} name="phone" render={({ field }) => ( <MaskedInput className={styles.input + " text"} {...field} mask={phoneNumberMask} id="phone" placeholder={langM === "AZ" && `Telefon*` || langM === "EN" && `Phone*` || langM === "RU" && `Телефон*`} type="text" />)}/>
                                        <p className={styles.error + " text"}><ErrorMessage name='phone'/></p>
                                    </div>
                                    
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="email" className={styles.label + " text"}>{langM === "AZ" && `Elektron poçt*` || langM === "EN" && `Email*` || langM === "RU" && `Электронное письмо*`}</label>
                                        <Field className={styles.input + " text"} name='email' placeholder="creativespark@info.az" type="text"/>
                                        <p className={styles.error + " text"}><ErrorMessage name='email'/></p>
                                    </div>
                                    
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="eventDate" className={styles.label + " text"}>{langM === "AZ" && `Tədbir tarixi*` || langM === "EN" && `Event date *` || langM === "RU" && `Дата события *`}</label>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label={langM === "AZ" && `Tədbir tarixi*` || langM === "EN" && `Event date *` || langM === "RU" && `Дата события *`}
                                                value={eventDate}
                                                onChange={(newValue) => {
                                                    seteventDate(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                        <p className={styles.error + " text"}></p>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="eventTime" className={styles.label + " text"}>{langM === "AZ" && `Tədbir saatı*` || langM === "EN" && `Event time*` || langM === "RU" && `Время события*`}</label>
                                         <Field className={styles.input + " text"} name="eventTime" render={({ field }) => ( 
                                         <MaskedInput
                                          className={styles.input + " text"} 
                                          {...field} 
                                          mask={timeMask} 
                                          id="phone" 
                                          placeholder={langM === "AZ" && `Tədbir saatı*` || langM === "EN" && `Event time*` || langM === "RU" && `Время события*`} 
                                          type="text" />)}/>
                                        <p className={styles.error + " text"}><ErrorMessage name='eventTime'/></p>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="eventType" className={styles.label + " text"}>{langM === "AZ" && `Tədbirin növü*` || langM === "EN" && `Type of event *` || langM === "RU" && `Тип мероприятия*`}</label>
                                        <Select options={optionsTypeOfEvent} defaultValue={optionsTypeOfEvent[0]} onChange={eventTypeChange} placeholder='Tədbirin növü seçin'/> 
                                        {/* <Field className={styles.input + " text"} placeholder="Ad, Soyad" type="text"/> */}
                                        <p className={styles.error + " text"}></p>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="eventLocation" className={styles.label + " text"}>{langM === "AZ" && `Tədbiri ünvanı*` || langM === "EN" && `Event address*` || langM === "RU" && `Адрес мероприятия*`}</label>
                                        <Field className={styles.input + " text"}  name='address' placeholder={langM === "AZ" && `Tədbiri ünvanı*` || langM === "EN" && `Event address*` || langM === "RU" && `Адрес мероприятия*`} type="text"/>
                                        <p className={styles.error + " text"}><ErrorMessage name='address'/></p>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="musicType" className={styles.label + " text"}>{langM === "AZ" && `Musiqi janrı*` || langM === "EN" && `Music *` || langM === "RU" && `Музыкальный жанр*`}</label>
                                        <Select options={optionsTypeOfMusic} defaultValue={optionsTypeOfMusic[0]} onChange={musicTypeChange} />
                                        <p className={styles.error + " text"}></p>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="musicianType" className={styles.label + " text"}>{langM === "AZ" && `Musiqiçilərin növləri*` || langM === "EN" && `Types of musicians*` || langM === "RU" && `Типы музыкантов*`}</label>
                                        <Select options={optionsTypeOfMusician} defaultValue={optionsTypeOfMusician[0]} onChange={musicianTypeChange} placeholder={langM === "AZ" && `Musiqiçilərin növləri*` || langM === "EN" && `Types of musicians*` || langM === "RU" && `Типы музыкантов*`}/>
                                        <p className={styles.error + " text"}></p>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="eventDate" className={styles.label + " text"}>{langM === "AZ" && `Təşkilat` || langM === "EN" && `Company` || langM === "RU" && `Компания`} <span className='text16'>(Bir təşkilatla əlaqəli olsanız)</span></label>
                                        <Field className={styles.input + " text"} name='company' placeholder="Təşkilatın adı" type="text"/>
                                        <p className={styles.error + " text"}></p>
                                    </div>

                                    <div className={styles.inputCont + " " + styles.inputNotesCont}>
                                        <label  htmlFor="notes" className={styles.label + " text"}>{langM === "AZ" && `Qeydlər` || langM === "EN" && `Notes` || langM === "RU" && `Заметки`}</label>
                                        <Field as='textarea' className={styles.inputNotes  + " text"} name='notes' placeholder={langM === "AZ" && `Qeydlər` || langM === "EN" && `Notes` || langM === "RU" && `Заметки`} type="text"/>
                                        <p className={styles.error + " text"}></p>
                                    </div>
                                    <button type='submit' className={styles.buttonSubmit + " button-text mt30"}>{langM === "AZ" && `Göndər` || langM === "EN" && `Submit` || langM === "RU" && `Представлять на рассмотрение`}</button>
                                </Form>
                            </Formik>
                        </div>
                    </Fade>
                </Modal>

            {/* Modal1 */}



            {/* Modal2 */}
                <Modal aria-labelledby="transition-modal-title"  aria-describedby="transition-modal-description" className={classes2.modal} open={open2} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>
                    <Fade in={open2} >
                        <div className={styles.modalHireWorker}>
                            <button className={styles.closeButton} onClick={handleClose2}>&#10006;</button>
                            <h2 className={styles.titleModal + " title-e-desk "}>{langM === "AZ" && `Hire a private teacher ` || langM === "EN" && `Şəxsi müəllim işə götürün` || langM === "RU" && `Нанять частного учителя`}</h2>
                            <h3 className={styles.subTitleModal + " top-title-b"}>{langM === "AZ" && `Şəxsi müəllim işə götürmək istəyirsinizsə, zəhmət olmazsa bu formu doldurun.` || langM === "EN" && `If you want to hire a private teacher, please complete this form.` || langM === "RU" && `Если вы хотите нанять частного учителя, заполните эту форму.`}</h3>
                            <Formik initialValues={initialValues2} validationSchema={validationSchema2} onSubmit={onSubmit2} validateOnChange={true} validateOnBlur={false}>
                                <Form  className={styles.formCont + ' mt20'} method="post" action="">
                                    <div className={styles.inputCont}>
                                        <label htmlFor="name" className={styles.label + " text"}>{langM === "AZ" && `Ad, Soyad*` || langM === "EN" && `First name and last name*` || langM === "RU" && `Имя и фамилия*`}</label>
                                        <Field className={styles.input + " text"} name='name2' placeholder={langM === "AZ" && `Ad, Soyad*` || langM === "EN" && `First name and last name*` || langM === "RU" && `Имя и фамилия*`} type="text"/>
                                        <p className={styles.error + " text"}><ErrorMessage name='name2'/></p>
                                    </div>
                                    
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="phone" className={styles.label + " text"}>{langM === "AZ" && `Telefon*` || langM === "EN" && `Phone*` || langM === "RU" && `Телефон*`}</label>
                                        <Field className={styles.input + " text"} name="phone2" render={({ field }) => ( <MaskedInput className={styles.input + " text"} {...field} mask={phoneNumberMask} id="phone" placeholder={langM === "AZ" && `Telefon*` || langM === "EN" && `Phone*` || langM === "RU" && `Телефон*`} type="text" />)}/>
                                        <p className={styles.error + " text"}><ErrorMessage name='phone2'/></p>
                                    </div>
                                    
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="email" className={styles.label + " text"}>{langM === "AZ" && `Elektron poçt*` || langM === "EN" && `Email*` || langM === "RU" && `Электронное письмо*`}</label>
                                        <Field className={styles.input + " text"} name='email2' placeholder="creativespark@info.az" type="text"/>
                                        <p className={styles.error + " text"}><ErrorMessage name='email2'/></p>
                                    </div>
                                    
                                    <div className={styles.inputCont}>
                                        <label  htmlFor="eventLocation" className={styles.label + " text"}>{langM === "AZ" && `Dərsin növü*` || langM === "EN" && `Course type*` || langM === "RU" && `Тип курса*`}</label>
                                        <Field className={styles.input + " text"}  name='lessonType' placeholder={langM === "AZ" && `Dərsin növü*` || langM === "EN" && `Course type*` || langM === "RU" && `Тип курса*`} type="text"/>
                                        <p className={styles.error + " text"}><ErrorMessage name='lessonType'/></p>
                                    </div>
                                
                                    <button type='submit' className={styles.buttonSubmit + " button-text mt30"}>{langM === "AZ" && `Göndər` || langM === "EN" && `Submit` || langM === "RU" && `Представлять на рассмотрение`}</button>
                                    <p className="text-bottom"> {langM === "AZ" && `Bir BMA tələbəsiniz və ya məzununuzsa və müəllimlər siyahısında olmaq istəyirsinizsə, daha çox məlumat almaq üçün zulfiyya.shafiyeva@musicacademy.edu.az elektron poçtuna göndərin.` || langM === "EN" && `If you are a BMA student or alumni and you want to be in the list of teachers, please email zulfiyya.shafiyeva@musicacademy.edu.az to get more information` || langM === "RU" && `Если вы студент или выпускник BMA и хотите быть в списке учителей, отправьте электронное письмо по адресу zulfiyya.shafiyeva@musicacademy.edu.az, чтобы получить дополнительную информацию.`}</p>
                                </Form>
                            </Formik>
                        </div>
                    </Fade>
                </Modal>
    {/* Modal and Forms */}{/* Modal and Forms */}{/* Modal and Forms */}
            </div>
        </>
    )
}

export default index

// export async function getStaticPaths() {
//     const res = await fetch('http://creativespark.testjed.me/api/musicians-api/')
//     const users = await res.json()
//     console.log(users)
//     const paths = users.data.map((user) => ({
//       params: { id: user.id.toString() },
//     }))
  
//     return { paths, fallback: false }
//   }


export const getServerSideProps = async (context) => {
    const res = await fetch(`https://creativespark.testjed.me/api/musicians-api/${context.params.id}`)
    const student = await res.json()
    return {
        props:{student}
    }
}