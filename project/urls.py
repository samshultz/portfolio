from django.conf.urls import url
from .views import HomeView


urlpatterns = [
    url(r'^home/$', HomeView.as_view(), name="index")
]