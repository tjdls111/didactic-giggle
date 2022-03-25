from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('investGoods/', views.investment_goods_list),
    path('now/', views.now),
    path('recommend/', views.how_about_this),
    path('popular/', views.popular),
    path('nft/', views.focusNFT),
]
