from django.contrib import admin

from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "discussion_title", "phone_no", "email_addr")
    readonly_fields = ("name", "discussion_title", "phone_no", "email_addr", "message") 
    search_fields = ('name', 'discussion_title', 'email_addr', 'message')
    
    
    
    
    