import '../footer/footer.css';

function Footer() {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-5 col-xs-12 about-company">
                  <h2>Watchlist</h2>
                  <p class="pr-5 text-white-50">
                    Crie sua lista de favoritos e divulgue para o mundo.
                  </p>
                </div>
                <div class="col-lg-3 col-xs-12 links">
                  <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                    <ul class="m-0 p-0">
                      <li><button class="btn btn-outline-primary">Mais Populares</button></li>
                      <li><button class="btn btn-outline-primary">Categorias</button></li>
                      <li><button class="btn btn-outline-primary">Sobre nós</button></li>
                      <li><button class="btn btn-outline-primary">Entrar</button></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-xs-12 location">
                  <h4 class="mt-lg-0 mt-sm-4">Contato</h4>
                  <p class="mb-0"><i class="fa fa-phone mr-3"></i>(12) 12323-1231</p>
                  <p><i class="fa fa-envelope-o mr-3"></i><a className="mailto" href="mailto:site@watchlist.com">site@watchlist.com</a></p>
                </div>
              </div>
              <div class="row mt-5 text-center">
                <div class="col copyright">
                  <p class=""><small class="text-white-50">© 2021. Todos os direitos reservados.</small></p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Footer;