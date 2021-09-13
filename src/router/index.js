import { createRouter, createWebHistory } from 'vue-router';
import PrimaryLanding from "../views/landings/PrimaryLanding";
import CourseLanding from "../views/landings/CourseLanding";
import Blog from "../views/blog/Blog";
import Article from "../views/blog/Article";
import Search from "../views/Search";
import Profile from "../views/profile/Profile";
import Certificate from "../views/profile/Certificate";
import CertificateForm from "../views/profile/CertificateForm";
import CertificateAnimation from "../views/profile/CertificateAnimation";
import MediaEnv from "../views/media_env/MediaEnv";
import ErrorPage from "../views/ErrorPage";

const routes = [
  {
    path: '/',
    name: 'primary-landing',
    component: PrimaryLanding
  },
  {
    path: '/courses/:course_name',
    name: 'course-landing',
    component: CourseLanding
  },  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/post/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    // Regular users and teachers can't visit other users pages, but admins can
    path: '/users/:id',
    name: 'profile',
    component: Profile
  },
  {
    path: '/certificate/:id',
    name: 'certificate',
    component: Certificate
  },  {
    path: '/certificate-form/:id',
    name: 'certificate-form',
    component: CertificateForm
  },
  {
    path: '/certificate-animation/:id',
    name: 'certificate-animation',
    component: CertificateAnimation
  },
  {
    path: '/media/:course_name',
    name: 'media-env',
    component: MediaEnv
  },
  {
    path: '/error/',
    name: 'error-page',
    component: ErrorPage
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/error'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
