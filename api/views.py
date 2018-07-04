from rest_framework import viewsets
from about.models import About
from contact.models import Contact
from project.models import Project
from skills.models import Skill
from .serializers import (
    AboutSeriazer,
    ContactSerializer,
    ProjectSerializer,
    SkillSerializer)


class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSeriazer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

