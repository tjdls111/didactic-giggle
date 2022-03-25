from django.http import JsonResponse

def investment_goods_list(request):
    data = {"lists":["NFT","스니커즈 리셀","조각투자","P2P투자","스타트업 펀딩","비상장 주식"]}
    # return JsonResponse(data)
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})

def now(request):
    return JsonResponse({"lists":
    [
        {"content":"3일간 마감된 투자상품","cnt":"20개"},
        {"content":"프랩에서 투자상품을 조회한 횟수","cnt":"1,047,083회"},
        {"content":"3일간 새로 등록된 상품","cnt":"133개"}
    
    ]});

def how_about_this(request):
    return JsonResponse({"lists":
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

def popular(request):
    return JsonResponse({"lists":[
        {"img":"https://dbm9jhyrx0h6k.cloudfront.net/service/1647308381931-a30dac05-604e-453b-906a-efca70d47bea.png","subject":"조각투자","name":"불로부터(Issu du feu)","price":"","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/tessaLogo.png","subTitle":"이배","loan":{},"open":"3월 25일 오픈","isbuyNow":"false"},
        {"img":"https://mkpcdn.com/500x/6c4f6af9af78a210574cb4768434901e_190866.jpg","subject":"NFT","name":"Skull Melt","price":"183,835.5원","logo":"https://msr-assets.s3.ap-northeast-2.amazonaws.com/MPLogo.png","subTitle":"Erik Matson","loan":{},"open":"","isbuyNow":"True"},
        {"img":"https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0039/1.png","subject":"조각투자","name":"Yacht-Master II 116680","price":"","logo":"https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0040/1.png","subTitle":"Rolex","loan":{},"open":"3월 23일 오픈"},


    ]});

def focusNFT(request):
    return JsonResponse({"lists":[

        {"img":"https://mkpcdn.com/500x/2b6cdc887fc789845529d867dc0509ec_251793.jpg","subject":"NFT","name":"Deer Pogo","price":"1,950,396.706원","logo":"https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0040/1.png","subTitle":"giulio iurissevich","loan":{},"open":"","isBuyNow":"True"},
        {"img":"https://mkpcdn.com/500x/8a8b77c7bdb9df05f53ac5f86b5a8958_978475.jpg","subject":"NFT","name":"Captive Thoughts","price":"","logo":"https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0040/1.png","subTitle":"ABDULLAH SOYLU","loan":{},"open":"","isBuyNow":""},
        {"img":"https://mkpcdn.com/500x/a14749e4c5f24b3b6d552653d30ee144_165637.jpg","subject":"NFT","name":"Petals","price":"","logo":"https://treasurer-source.s3.ap-northeast-2.amazonaws.com/trade-item-image/RLX0040/1.png","subTitle":"alexa.art","loan":{},"open":"","isBuyNow":""},


    ]});