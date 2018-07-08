
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers

from api.views import (
    AboutViewSet,
    ContactViewSet,
    ProjectViewSet,
    SkillViewSet,
    EducationViewSet,
    ExperienceViewSet,
    ServiceViewSet)

router = routers.DefaultRouter()

router.register(r'about', AboutViewSet, base_name='about')
router.register(r'contacts', ContactViewSet, base_name='contact')
router.register(r'projects', ProjectViewSet, base_name='project')
router.register(r'skills', SkillViewSet, base_name='skill')
router.register(r'education', EducationViewSet, base_name='education')
router.register(r'experience', ExperienceViewSet, base_name='experience')
router.register(r'services', ServiceViewSet, base_name='service')
urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'', include('project.urls', namespace="projects")),
    url(r'^admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)
