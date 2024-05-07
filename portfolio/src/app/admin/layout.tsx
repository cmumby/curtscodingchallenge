/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
//import '@/app/ui/global.css';
import '../../public/plugins/vendor/google-font.css';
import '../../public/plugins/fontawesome-free/css/all.min.css';
import '../../public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../../public/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../public/plugins/jqvmap/jqvmap.min.css';
import '../../public/dist/css/adminlte.min.css';
//import '../../public/dist/css/adminlte.min.css.map';
import '../../public/plugins/overlayScrollbars/css/OverlayScrollbars.css';
import '../../public/plugins/daterangepicker/daterangepicker.css';
import '../../public/plugins/summernote/summernote-bs4.min.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">
                {' '}
                Home{' '}
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                {' '}
                Contact{' '}
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="fas fa-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments"></i>
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="text-danger float-right text-sm">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-muted text-sm">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="text-muted float-right text-sm">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-muted text-sm">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="text-warning float-right text-sm">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-muted text-sm">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell"></i>
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                  <span className="text-muted float-right text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                  <span className="text-muted float-right text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                  <span className="text-muted float-right text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-controlsidebar-slide="true"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large"></i>
              </a>
            </li>
          </ul>
        </nav>

        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" className="brand-link">
            <span className="brand-text font-weight-light">
              CurtsCode Admin
            </span>
          </a>

          <div className="sidebar">
            <div className="user-panel d-flex mb-3 mt-3 pb-3">
              <div className="image"></div>
              <div className="info">
                <a href="#" className="d-block">
                  {' '}
                  Lester Pierce{' '}
                </a>
              </div>
            </div>

            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw"></i>
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>About Section</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>Experience Section</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>Portfolio Section</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>Challenges Section</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div className="content-wrapper" style={{ paddingTop: '1rem' }}>
          {/* <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div> */}

          <section className="content">
            <div className="container-fluid">{children}</div>
          </section>
        </div>

        <footer className="main-footer">
          <strong>
            Copyright &copy; 2014-2021
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
          <div className="d-none d-sm-inline-block float-right">
            <b>Version</b> 3.2.0
          </div>
        </footer>
      </div>

      <script src="plugins/jquery/jquery.min.js"></script>

      <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="plugins/jquery-ui/jquery-ui.min.js"></script>

      <script src="dist/js/adminlte.js"></script>

      {/* <script src="dist/js/demo.js"></script> 
        <script src="dist/js/pages/dashboard.js"></script>
      */}
    </>
  );
}
