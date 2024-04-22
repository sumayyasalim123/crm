from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('archive/', views.archive, name='archive'),
    path('archive.html', views.archive_html, name='archive_html')  # Add this line
]
