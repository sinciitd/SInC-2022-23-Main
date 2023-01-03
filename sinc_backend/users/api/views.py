from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Adding custom claims:
        token['email'] = user.email
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def get_routes(request):
    routes = [
        'api/token/',
        'api/token/refresh/',
        'api/logout/',
    ]
    return Response(routes)


@api_view(['POST'])
def logout_view(request):
    """Blacklist the refresh token: extract token from the header
      during logout request user and refresh token is provided"""
    try:
        refresh_token=request.data["refresh"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response("Successful Logout", status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(f"Logout Failed: {str(e)}", status=status.HTTP_400_BAD_REQUEST)
