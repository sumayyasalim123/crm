from django.shortcuts import render

# Create your views here.

def index(request):
    # Retrieve all service objects fro services = Service.objects.all()
    # Pass the services to the template context
    return render(request, 'index.html')

def archive(request):
    # Your logic to retrieve archived cards data goes here
    return render(request, 'archive.html')

def archive_html(request):
    return render(request, 'archive.html')