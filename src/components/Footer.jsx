
function Footer() {
    return (
        <footer style={{ 'backgroundColor': "#525b69" }}>
            <div className="container text-white pt-5 pb-5">
                <div className="row">
                    <div className="col-6">
                        <table className="footerTable1">
                            <tbody>
                                <tr>
                                    <td >Home</td>
                                    <td>Blog</td>
                                </tr>
                                <tr>
                                    <td>About</td>
                                    <td>Search</td>
                                </tr>
                                <tr>
                                    <td>Community</td>
                                    <td>T&#38;Cs</td>
                                </tr>
                                <tr>
                                    <td>Contact us</td>
                                    <td>Privacy</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6">
                        <form>
                            <div className="row mb-2">
                                Get our newsletter
                            </div>
                            <div className="row">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="email" class="form-control" id="inputPassword2" placeholder="Enter your Email" />
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" class="btn btn-light mb-2">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <span className=" bi bi-facebook"></span>
                                </div>
                                <div className="col-1">
                                    <span className="bi bi-instagram"></span>
                                </div>
                                <div className="col-1"><i class="bi bi-snapchat"></i></div>
                                <div className="col-1"><i class="bi bi-twitter"></i></div>
                                <div className="col-1"><i class="bi bi-youtube"></i></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </footer>
    )
}
export default Footer;