import React from 'react';

function AdminLayout({ children }) {
  return (
    <>
      <head>
        <title>AdminLTE 3 | Dashboard</title>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />

        <link
          rel="stylesheet"
          href="plugins/fontawesome-free/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />

        <link
          rel="stylesheet"
          href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
        />

        <link
          rel="stylesheet"
          href="plugins/icheck-bootstrap/icheck-bootstrap.min.css"
        />

        <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css" />

        <link rel="stylesheet" href="dist/css/adminlte.min.css" />

        <link
          rel="stylesheet"
          href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
        />

        <link
          rel="stylesheet"
          href="plugins/daterangepicker/daterangepicker.css"
        />

        <link
          rel="stylesheet"
          href="plugins/summernote/summernote-bs4.min.css"
        />
      </head>
      <body className="hold-transition sidebar-mini layout-fixed">
        <div className="wrapper">
          <div className="preloader flex-column justify-content-center align-items-center"></div>

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
                    <span className="text-muted float-right text-sm">
                      3 mins
                    </span>
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
                    <span className="text-muted float-right text-sm">
                      2 days
                    </span>
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
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="./index.html" className="nav-link active">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Dashboard v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index2.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Dashboard v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index3.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Dashboard v3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="pages/widgets.html" className="nav-link">
                      <i className="nav-icon fas fa-th"></i>
                      <p>
                        Widgets
                        <span className="right badge badge-danger">New</span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-copy"></i>
                      <p>
                        Layout Options
                        <i className="fas fa-angle-left right"></i>
                        <span className="badge badge-info right">6</span>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/layout/top-nav.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Top Navigation</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/top-nav-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Top Navigation + Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/boxed.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Boxed</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Fixed Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-sidebar-custom.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>
                            Fixed Sidebar <small>+ Custom Area</small>
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-topnav.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Fixed Navbar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-footer.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Fixed Footer</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/collapsed-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Collapsed Sidebar</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie"></i>
                      <p>
                        Charts
                        <i className="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/charts/chartjs.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>ChartJS</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/flot.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Flot</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/inline.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Inline</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/uplot.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>uPlot</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-tree"></i>
                      <p>
                        UI Elements
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/UI/general.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>General</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Icons</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/buttons.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Buttons</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/sliders.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Sliders</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/modals.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Modals & Alerts</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/navbar.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Navbar & Tabs</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/timeline.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Timeline</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/ribbons.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Ribbons</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-edit"></i>
                      <p>
                        Forms
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/forms/general.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>General Elements</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/forms/advanced.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Advanced Elements</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/forms/editors.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Editors</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/forms/validation.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Validation</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-table"></i>
                      <p>
                        Tables
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Simple Tables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>DataTables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/jsgrid.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>jsGrid</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">EXAMPLES</li>
                  <li className="nav-item">
                    <a href="pages/calendar.html" className="nav-link">
                      <i className="nav-icon far fa-calendar-alt"></i>
                      <p>
                        Calendar
                        <span className="badge badge-info right">2</span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/gallery.html" className="nav-link">
                      <i className="nav-icon far fa-image"></i>
                      <p>Gallery</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/kanban.html" className="nav-link">
                      <i className="nav-icon fas fa-columns"></i>
                      <p>Kanban Board</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-envelope"></i>
                      <p>
                        Mailbox
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/mailbox/mailbox.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Inbox</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/mailbox/compose.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Compose</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/mailbox/read-mail.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Read</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-book"></i>
                      <p>
                        Pages
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/examples/invoice.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Invoice</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/profile.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Profile</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/e-commerce.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>E-commerce</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/projects.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Projects</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-add.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Project Add</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-edit.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Project Edit</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-detail.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Project Detail</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/contacts.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Contacts</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/faq.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>FAQ</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/contact-us.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Contact us</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-plus-square"></i>
                      <p>
                        Extras
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>
                            Login & Register v1
                            <i className="fas fa-angle-left right"></i>
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a
                              href="pages/examples/login.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Login v1</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/register.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Register v1</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/forgot-password.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Forgot Password v1</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/recover-password.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Recover Password v1</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>
                            Login & Register v2
                            <i className="fas fa-angle-left right"></i>
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a
                              href="pages/examples/login-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Login v2</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/register-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Register v2</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/forgot-password-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Forgot Password v2</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/recover-password-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p>Recover Password v2</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/lockscreen.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Lockscreen</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/legacy-user-menu.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Legacy User Menu</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/language-menu.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Language Menu</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/404.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Error 404</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/500.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Error 500</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/pace.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Pace</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/blank.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Blank Page</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="starter.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Starter Page</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-search"></i>
                      <p>
                        Search
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/search/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Simple Search</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/search/enhanced.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Enhanced</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">MISCELLANEOUS</li>
                  <li className="nav-item">
                    <a href="iframe.html" className="nav-link">
                      <i className="nav-icon fas fa-ellipsis-h"></i>
                      <p>Tabbed IFrame Plugin</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://adminlte.io/docs/3.1/"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-file"></i>
                      <p>Documentation</p>
                    </a>
                  </li>
                  <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-circle nav-icon"></i>
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-circle"></i>
                      <p>
                        Level 1<i className="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Level 2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>
                            Level 2<i className="right fas fa-angle-left"></i>
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon"></i>
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon"></i>
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon"></i>
                              <p>Level 3</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Level 2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-circle nav-icon"></i>
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-header">LABELS</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-danger"></i>
                      <p className="text">Important</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-warning"></i>
                      <p>Warning</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-info"></i>
                      <p>Informational</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <div className="content-wrapper">
            <div className="content-header">
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
            </div>

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

          <aside className="control-sidebar control-sidebar-dark"></aside>
        </div>

        <script src="plugins/jquery/jquery.min.js"></script>

        <script src="plugins/jquery-ui/jquery-ui.min.js"></script>

        <script>$.widget.bridge("uibutton", $.ui.button);</script>

        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="plugins/chart.js/Chart.min.js"></script>

        <script src="plugins/sparklines/sparkline.js"></script>

        <script src="plugins/jqvmap/jquery.vmap.min.js"></script>
        <script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>

        <script src="plugins/jquery-knob/jquery.knob.min.js"></script>

        <script src="plugins/moment/moment.min.js"></script>
        <script src="plugins/daterangepicker/daterangepicker.js"></script>

        <script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>

        <script src="plugins/summernote/summernote-bs4.min.js"></script>

        <script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>

        <script src="dist/js/adminlte.js"></script>

        <script src="dist/js/demo.js"></script>

        <script src="dist/js/pages/dashboard.js"></script>
      </body>
    </>
  );
}

export default AdminLayout;
