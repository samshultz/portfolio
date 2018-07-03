from django.contrib import admin
from .models import Skill

class SkillAdmin(admin.ModelAdmin):
    list_display = 'name', 'get_expertise'

    def get_expertise(self, obj):
        return str(obj.expertise) + " %"