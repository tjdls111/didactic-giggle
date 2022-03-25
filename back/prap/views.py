from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def investment_goods_list(request):
    return Response({"lists":["NFT","스니커즈 리셀","조각투자","P2P투자","스타트업 펀딩","비상장 주식"]});

@api_view(['GET'])
def now(request):
    return Response({"lists":
    [
        {"content":"3일간 마감된 투자상품","cnt":"20개"},
        {"content":"프랩에서 투자상품을 조회한 횟수","cnt":"1,047,083회"},
        {"content":"3일간 새로 등록된 상품","cnt":"133개"}
    
    ]});

@api_view(['GET'])
def how_about_this(request):
    return Response({"lists":
    [
        {"img":"https://ipfs.pixura.io/ipfs/QmaRc4zgRnRCedLoiQrWg2ozPu16Bewfk5u8uz6CLZmXLV/nounrock.jpg","subject":"NFT","name":"Day Zero at Noun Rock","price":"","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/SRLogo.png","subTitle":"","loan":{},"open":""},
        {"img":"https://ipfs.pixura.io/ipfs/QmeNqqcegmEkLpUwGHz7Ky5W4ts3TmhBPUPvoWVaEyKRCS/azeroyouth-garycartlidge.png","subject":"NFT","name":"A Zero Youth","price":"7,402,000원","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/SRLogo.png","subTitle":"","loan":{},"open":""},
        {"img":"https://mkpcdn.com/500x/da65b2f5b7373420813e80113d40b9bd_225836.jpg","subject":"NFT","name":"[Hackatao REMIXME 3] Chariots of the Gods","price":"","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/SRLogo.png","subTitle":"Hackatao","loan":{},"open":""},
        {"img":"https://prap-assets.s3.ap-northeast-2.amazonaws.co…%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1.png","subject":"비상장주식","name":"비바리퍼블리카","price":"97,500원","logo":"","subTitle":"기업가치 16조 570억","loan":{},"open":""},
        {"img":"https://mkpcdn.com/500x/b7d2da09ddf9146aba4f28e62890c88d_625734.jpg","subject":"NFT","name":"NEEMO HOEZ VIII THE CRYP-TO TRILLIONAIRE","price":"1,859,430원","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/MPLogo.png","subTitle":"Bosslogic","loan":{},"open":""},
        {"img":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/defaultIndividual.jpg","subject":"P2P 투자","name":"대환대출","price":"","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/eightpercentLogo.png","subTitle":"","loan":{"percent":"15.49","month":"12개월"},"open":""},
        {"img":"https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0040/1.png","subject":"조각투자","name":"GMT-MASTER II 126710BLNR ‘Bat-man’","price":"","logo":"https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0040/1.png","subTitle":"Rolex","loan":{},"open":"3월 30일 오픈"},
        {"img":"https://www.daily-funding.com:8000/product/UWTRFihD1v","subject":"P2P 투자","name":"[제4438호] 관공서 협력사 운영자금","price":"","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/dailyfundingLogo.png","subTitle":"","loan":{"percent":"10%","month":"4개월"},"open":"2월 4일 오픈"},
    
    ]});

@api_view(['GET'])
def popular(request):
    return Response({"lists":[


    ]});