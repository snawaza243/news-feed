import React from 'react'
import { Link } from 'react-router-dom';

 const Footer2 = () => {
    return (
        <div>
            <footer class="bg-light text-lg-start">
                <div class="py-4 text-center">
                    <Link role="button" class="btn btn-primary btn-lg m-2"
                        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
                        Learn Bootstrap 5
                    </Link>
                    <Link role="button" class="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">
                        Download MDB UI KIT
                    </Link>
                </div>

                <hr class="m-0" />

                <div class="text-center py-4 align-items-center">
                    <p>Follow MDB on social media</p>
                    <Link to="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" class="btn btn-primary m-1" role="button"
                        rel="nofollow" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </Link>
                    <Link to="https://www.facebook.com/mdbootstrap" class="btn btn-primary m-1" role="button" rel="nofollow"
                        target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="https://twitter.com/MDBootstrap" class="btn btn-primary m-1" role="button" rel="nofollow"
                        target="_blank">
                        <i class="fab fa-twitter"></i>
                    </Link>
                    <Link to="https://github.com/mdbootstrap/mdb-ui-kit" class="btn btn-primary m-1" role="button" rel="nofollow"
                        target="_blank">
                        <i class="fab fa-github"></i>
                    </Link>
                </div>

                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                    © 2020 Copyright:
                    <Link class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
                </div>
            </footer>

        </div>
    )
}


export default Footer2;