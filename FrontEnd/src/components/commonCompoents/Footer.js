import '../../css/footer.css';

const Footer = ()=>{
    if(window.location.pathname.includes('/surveys/feedback/'))
    return null;
    return(
        <footer className="page-footer footer">
       
        <div className="container">
        © 2022 Emaliy Copyright 
        <a className="grey-text text-lighten-4 right" href='https://github.com/dewminGH' target='_blank' rel="noreferrer">
        <i className="material-icons">code</i></a>
        </div>
        
        </footer>
    )
}

export default Footer;