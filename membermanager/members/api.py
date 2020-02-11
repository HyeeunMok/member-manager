from members.models import Member
from rest_framework import viewsets, permissions
from .serializers import MemeberSerializer

# Member Viewset
class MemberViewSet(viewsets.ModelViewSet):
  queryset = Member.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = MemeberSerializer