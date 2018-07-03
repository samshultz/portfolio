from django.contrib import admin

from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "company_name", "phone_no", "email_addr")
    readonly_fields = ("name", "company_name", "phone_no", "email_addr") 
    search_fields = ('name', 'company_name', 'email_addr', 'message')
    
    
    
    
    