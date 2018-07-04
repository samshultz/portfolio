from rest_framework import serializers

from about.models import About
from contact.models import Contact
from project.models import Project
from skills.models import Skill


class AboutSeriazer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        exclude = "publish",


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"
