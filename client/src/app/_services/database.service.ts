import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  categories = [
    {
      id: 0,
      lv0content: {title: 'members', link: null},
      lv1content: [
        {title: 'Overall', link: '/members/overall'},
        {title: 'Professor', link: '/members/professor'},
        {title: 'Students', link: '/members/students'},
        {title: 'Alumni', link: '/members/alumni'},
      ]
    },
    {
      id: 1,
      lv0content: {title: 'researches', link: '/researches'},
      lv1content: []
    },
    {
      id: 2,
      lv0content: {title: 'publications', link: null},
      lv1content: [
        {title: 'International Journal', link: '/publications/international-journal'},
        {title: 'Domestic Journal', link: '/publications/domestic-journal'},
        {title: 'International Conference', link: '/publications/international-conference'},
        {title: 'Domestic Conference', link: '/publications/domestic-conference'},
      ]
    },
    {
      id: 3,
      lv0content: {title: 'projects', link: '/projects'},
      lv1content: []
    },
    {
      id: 4,
      lv0content: {title: 'board', link: null},
      lv1content: [
        {title: 'Notice', link: '/board/notice'},
        {title: 'News', link: '/board/news'},
        {title: 'Seminar', link: '/board/seminar'},
        {title: 'Photo', link: '/board/photo'}
      ]
    }
  ]

  researches = [
    {
      id: 1,
      img: 'assets/img/researches/research01.png',
      title: 'Locally Linear Reconstruction for classification, regression, novelty detection, clustering, and missing value imputation',
      contents: [{
        title: null,
        contents: [
          '개체 기반 학습(instance-based learning)은 사전에 모델 구축이 필요 없는 방식으로 k개의 유사 개체를 통해 판단하는 k-인접 이웃(k-nearest neighbor; k-NN) 알고리즘이 대표적임',
          'k-NN의 경우 이웃 개체의 수인 k와 이들을 결합하는 가중치(weights)에 따라 성능이 크게 좌우됨',
          'k의 수에 강건(robust)하며 주위 개체들과의 관계(local topology)를 고려하여 재구축 오차(reconstruction error)를 최소화하는 최적화 문제를 정의함',
          '최적화 문제의 해(solution)은 어느 이웃이(which neighbor) 얼마나 중요한지(how important)에 대한 정보를 담고 있음',
          '이 최적화 방법론을 분류(classification), 회귀(regression), 이상치 탐지(novelty detection), 군집화(clustering), 결측치 대치(missing value imputation) 등에 적용하여 성능을 향상시킴'
        ]
      }]
    },
    {
      id: 2,
      img: 'assets/img/researches/research02.png',
      title: 'Supervised Document Embedding & Korean Word Recognition',
      contents: [
        {
          title: null,
          contents: [
            '한글의 경우 영어에 비해 어휘사전과 형태소분석기의 완성도가 높지 않음',
            '어휘사전 및 형태소 분석기의 완성도를 높이기 위해 단어를 정확하게 인식하는 것이 매우 중요함',
            '부분 글자의 위치 정보를 고려하는 단어 인식 방법론인 KR-WordRank를 개발하여 문맥에 적합한 한글 단어 인식 성능을 향상시킴',
            '또한 단어와 문서, 그리고 문서의 범주 정보를 포함하는 distribution representation 방법인 Supervised Paragraph Vector (SPV)를 개발하여 문서 분류 성능을 향상시킴'
          ]
        }
      ]
    },
    {
      id: 3,
      img: 'assets/img/researches/research03.png',
      title: 'Industrial & Public Applications based on Structured Data',
      contents: [
        {
          title: '반도체 공정의 가상 계측 모델 개발',
          contents: [
            '반도체 공정 FDC 설비 데이터를 입력으로 사용하여 계측 정보를 예측하는 가상 계측(virtual metrology) 모델을 Statistical & Machine Learning algorithms을 활용하여 개발',
            '가상 계측 정보에 대한 예측 결과값과 함께 해당 값에 대한 신뢰도를 Novelty detection algorithms을 이용하여 추정'
          ]
        },
        {
          title: '키스트로크 기반 사용자 인증',
          contents: [
            '사용자의 타이핑 패턴을 활용하여 학습된 정상 사용자의 패턴과 유사할 경우에만 접속을 허가하는 2단계 인증 시스템 개발',
            '패스워드, 자유로운 문자열, 다양한 입력기기, 다양한 입력 언어 등을 아우르는 통합 인증 방법론을 개발'
          ]
        }
      ]
    },
    {
      id: 4,
      img: 'assets/img/researches/research04.png',
      title: 'Industrial & Public Applications based on Unstructured Data',
      contents: [
        {
          title: 'SNS 데이터를 활용한 영화 흥행 예측',
          contents: [
            '영화 흥행 예측에 사용된 기존 정형 데이터에 SNS상에 해당 영화가 언급된 텍스트를 수집하고 이에 대한 감성분석을 실시하여 예측 모델의 입력 변수로 사용',
            '기계학습 및 앙상블 기법을 이용하여 예측 성능 향상'
          ]
        },
        {
          title: '기술가치평가를 위한 유사 연구 제안서 판별',
          contents: [
            '신기술의 적정 가치를 평가하기 위해 기존의 국가연구수행과제 중 유사한 제안서를 텍스트마이닝을 통해 판별하는 방법론 개발',
          ]
        },
        {
          title: '의안 내용 기반 통과 여부 예측',
          contents: [
            '발의된 의안의 내용에 대한 텍스트 분석을 통해 어떤 의안이 통과되고 어떤 의안이 기각되는지를 예측하는 모델 구축',
          ]
        }
      ]
    }
  ]

  projects = [
    {
      id: 1,
      img: 'assets/img/projects/1.png',
      term: '2018.03 ~ 2019.02',
      title: 'XAI (eXplainable AI) 기반 스마트 에너지 플랫폼 기술 개발 (한국전력공사 전력연구원)',
      contents: [
        {
          title: '탐색적 자료 분석(EDA)을 통한 전력수요 패턴 분석 및 신규 변수 추출',
          contents: [
            'Data cleaning, Integrating, Transformation 등의 데이터 전처리 과정을 수행하여 데이터들의 품질을 이용하여 분석 전 전력 수요 데이터의 품질을 향상',
            '탐색적 자료 분석을 이용한 전력수요 패턴의 탐색적 자료 분석 및 신규 변수 추출',
            '전력 사용처에 따른 탐색적 자료 분석(Exploratory Data Analysis;EDA) 기법 개발 및 데이터 특성에 맞는 후처리 작업 수행'
          ]
        },
        {
          title: '신규 변수와 기존 예측 모델의 변수기반의 머신러닝 기법을 통한 15분,30분 단위의 초단기 전력수요 예측 기법 개발',
          contents: [
            'Auto-Encoder, PCA, SVD 등 의 전력 수요예측을 위한 잠재 변수 추출',
            '1D-Convolution Auto-encoder를 통한 잠재변수 추출',
            'Gradient Boosting Machine, Random Forest, Support Vector Machine, Neural Network 등 의 다양한 머신러닝 기법 등을 이용'
          ]
        },
        {
          title: '딥러닝 기반의 고성능 단기 전력 수요예측 모델 개발',
          contents: [
            'Sliding Window 기반의 최적 Training set 검출',
            'Deep Neural Network, Recurrent Neural Network, Convolutional Neural Network 기반의 전력 수요예측 모델 개발',
            '전력 수요 예측을 위한 다양한 Network architecture 구성 및 검증',
            '다양한 딥러닝 기반의 전력수요 예측모델을 통해 기존 머신 러닝 학습 방법론 대비 성능 향상 및 연산 효율성 증진을 기대'
          ]
        }
      ]
    },
    {
      id: 2,
      img: 'assets/img/projects/2.png',
      term: '2018.04 ~ 2018.11',
      title: '딥러닝 기반 Wafer Bin Map 이상 및 Map Fail 패턴 탐지 방법 (삼성전자)',
      contents: [
        {
          title: '일 단위 WBM Clustering 및 WBM 패턴 생성 비율 기준 특이 날짜 탐지 방법론',
          contents: [
            'WBM은 다양한 제 품별, 공정 경로 등 여러 상황에 따라 다르게 패턴이 나타나며, 일 별/공정 단위 WBM의 특이 패턴의 변화 탐색 필요',
            '과거 대비 WBM의 패턴이 많이 변화 하였다는 것은 공정 Job schedule, 재료의 변화 등이 있음',
            '본 연구는 비슷한 공정 상황에서의 각 일자 별 WBM의 패턴이 상이하게 생산될 경우 이를 탐지하여 엔지니어에게 공정 프로파일링의 우선순위 정보를 제공하고자 함',
            '각 제품의 WBM 이상 패턴을 위한 변수를 추출 할 수 있는 Convolution Autoencoder 방법론을 사용하여 일 단위 WBM 결과 해석'
          ]
        }
      ]
    },
    {
      id: 3,
      img: 'assets/img/projects/3.png',
      term: '2018.04 ~ 2018.10',
      title: '모바일 환경에서 사용자 행위기반 실시간 이상징후 탐지기법 연구 (국가보안기술연구소)',
      contents: [
        {
          title: '딥러닝 기반 모바일 사용자의 실시간 인증의 필요성',
          contents: [
            '내부자의 권한 없는 접속, 이용, 공개, 방해, 변경 및 파괴로부터 정보시스템을 보호',
            '기업 내부의 정보 보호를 통해 정보의 무결성, 기밀성 및 가용성을 유지'
          ]
        },
        {
          title: '순환신경망을 활용한 사용자 인증 시스템으로 새로운 원천 기술 확보',
          contents: [
            '모바일 환경에서의 사용자 인증 방법론 기술 확보'
          ]
        }
      ]
    },
    {
      id: 4,
      img: 'assets/img/projects/4.png',
      term: '2018.04 ~ 2018.10',
      title: '해상환경 추정 정확도 향상을 위한 이미지 프로세싱을 통한 해상환경 추정기법 개발 (대우조선해양)',
      contents: [
        {
          title: ' 선박의 최적항로 탐색을 위한 해상환경 추정의 필요성',
          contents: [
            '해상에서의 운항중인 선박의 최적 항로 선택을 위해서 해상 환경에 대한 추정이 필요함',
            '기존의 추정방법은 실시간 예측이 어렵고 넓은 지역에 대한 상태를 예측하므로, 경제적인 운항경로 탐색을 위해 보다 작은 시공간 단위에 대한 해상환경 추정기법이 필요함'
          ]
        },
        {
          title: '해상 이미지를 통한 머신러닝 기반의 파랑정보 예측 연구 ',
          contents: [
            '해상에서 운용 중인 선박에서 확보된 해상사진을 이용하여 파랑정보(파도 높이, 방향, 주기 등)을 예측하는 머신러닝 기반 방법론 개발',
            '정확한 추정을 위해 기상, 해양정보 및 이미지 촬영 정보 고려함'
          ]
        }
      ]
    },
    {
      id: 5,
      img: 'assets/img/projects/5.png',
      term: '2018.03 ~ 2019.02',
      title: 'QoE 정보를 이용한 머신러닝 미디어 스트리밍 최적화 시스템 개발 (정보통신기술진흥센터)',
      contents: [
        {
          title: 'ABR(Available Bit Rate)',
          contents: [
            'HTTP 동적 적응 스트리밍(Dynamic Adaptive Streaming over HTTP, DASH)',
            'http를 이용하여 사용자의 통신 상태에 맞춰 최적의 품질로 멀티미디어 콘텐츠를 전송하는 적응 스트리밍 기술'
          ]
        },
        {
          title: '사용자의 콘텐츠 사용에 대한 QoE 분석 기술 개발',
          contents: [
            '사용자의 콘텐츠 이용 경험을 통해 생성되는 QoE 데이터에 대한 다각적인 분석',
            '특이한 형태의 QoE 데이터를 조기에 판별 적절한 대응 전략을 수립할 수 있는 알고리즘 구축'
          ]
        },
        {
          title: 'QoE 향상을 위한 CDN 배치 최적화',
          contents: [
            '동영상등 대용량 미디어 콘텐츠를 PC, 모바일 단말등에 서비스하기 위해서는 다양한 계층의 CDN을 구축하고, 각 CDN에 콘텐츠를 적절히 배치하여야 함',
            '멀티 CDN의 최적화를 위한 미디어 컨텐츠의 뷰카운트 예측 및 전체 비용의 최적화'
          ]
        }
      ]
    },
    {
      id: 6,
      img: 'assets/img/projects/6.png',
      term: '2018.06 ~ 2019.02',
      title: '딥러닝을 활용한 문서와 그래프의 유사성 판단에 대한 연구 (NCSoft)',
      contents: [
        {
          title: '연상작용을 통한 문장의 유사여부 판단',
          contents: [
            '사람이 연상작용을 통해 두 문장의 유사여부를 판단하는 것처럼 연상작용을 모델에 적용해 문장을 이미지에 빗대어 표현한 후, 두 문장의 유사여부를 판단하고자 함',
            '전체 모델 구조는 두개의 input을 받을 수 있는 siamese network에 문장 embedding module과 association module을 적용'
          ]
        },
        {
          title: '경제 지표를 통한 과거의 유사한 날 식별',
          contents: [
            '각 날에 기록된 경제 지표들을 통하여 데이터 생성',
            '비정형 또는 정형 데이터를 사용하여 날(day)을 representation',
            '각 날들의 유사도 비교'
          ]
        }
      ]
    },
    {
      id: 7,
      img: 'assets/img/projects/7.png',
      term: '2018.03 ~ 2019.03',
      title: '머신러닝을 활용한 시스템 이상상태 탐지기술 연구 (국방과학연구소)',
      contents: [
        {
          title: 'Data Representation Learning',
          contents: [
            'Syscall을 하나의 token으로 취급하여 Syscall-Syscall sequence의 관계를 텍스트 분석의 단어-문서 관계와 동일하게 설정',
            'Doc2vec을 사용하여 Syscall의 관계를 고려한 d차원 벡터 representation 학습',
            'TF-IDF, Bag-of-Words(BOW)를 사용하여 Syscall의 개수만큼의 차원을 갖는 벡터로 representation 학습'
          ]
        },
        {
          title: 'Novelty Detection',
          contents: [
            '정상 상태의 데이터만을 사용하는 비지도학습 기반의 이상치 탐지 기법을 적용하여 정상-비정상 class간의 불균형 문제 극복',
            '다양한 머신러닝 이상치 탐지 기법을 적용하여 데이터에 가장 적합한 모형 탐색'
          ]
        }
      ]
    },
    {
      id: 8,
      img: 'assets/img/projects/8.png',
      term: '2017.11 ~ 2018.04',
      title: '뉴스 기사 및 댓글 극성 분석 방법론 개발 (시그널 코리아)',
      contents: [
        {
          title: null,
          contents: [
            '뉴스 기사, 댓글의 극성을 분류하는 딥러닝 기반의 모델 개발',
            '문서 분류에서 좋은 성능을 보이는 Recurrent Neural Network와 Attention mechanism을 적용',
            '극성 판별 확률이 높지 않은 gray 영역에 속하는 데이터에 중립 label 할당'
          ]
        }
      ]
    },
    {
      id: 9,
      img: 'assets/img/projects/9.png',
      term: '2017.09 ~ 2017.12',
      title: '빅데이터 기반 조기경보모형 연구 개발 (금융감독원)',
      contents: [
        {
          title: '현 금융위험조기경보모형의 한계',
          contents: [
            '데이터의 가용성, 정확성에 의존적인 모형으로 인한 신뢰성 및 예측력 문제',
            '시시각각 변화하는 금융환경 및 금융산업의 구조로 인한 예측력 약화',
            '정량적(quantitative) 데이터 위주의 분석에 정성적(qualitative) 데이터 분석으로 보완할 필요가 있음'
          ]
        },
        {
          title: '빅데이터 기반 조기경보모형',
          contents: [
            '빅데이터(뉴스 및 민원)를 통한 기존 조기 경보 모형의 통해서 정성적(qualitative)인 한계점을 극복',
            '기존 재무 변수와 빅데이터를 동시 활용함으로써 금융위기조기경보모형의 시너지 효과를 확보',
            '단순계량기법이 아닌 기계학습 및 딥러닝을 활용하여 예측력 높은 조기경보모형을 구축'
          ]
        }
      ]
    },
    {
      id: 10,
      img: 'assets/img/projects/10.png',
      term: '2017.07 ~ 2018.01',
      title: '딥러닝 및 텍스트마이닝 기반의 VDS 분석 시스템 개발 (현대자동차)',
      contents: [
        {
          title: '이상치 탐지를 이용한 특이 VDS 응답 추출',
          contents: [
            '텍스트 분석을 통해 특이, 민감 소비자 의견 청취를 목적으로 함',
            'VDS 응답에 Doc2Vec 모델을 적용하여 벡터로 나타낸 후 novelty detection 기법을 활용해 각 응답별 정량적인 특이 점수 산출'
          ]
        },
        {
          title: 'LDA 기반 소비자 만족도 요인 추출 및 군집화',
          contents: [
            'VDS 소비자 의견에 토픽모델링(LDA) 적용',
            '문서 별 토픽의 비중을 이용해 각 VDS 소비자 의견을 다차원 공간상의 한 점으로 표현',
            '군집화 기법을 이용해 유사 VDS 군집화 혹은 세분화'
          ]
        }
      ]
    },
    {
      id: 11,
      img: 'assets/img/projects/11.png',
      term: '2017.05 ~ 2017.10',
      title: '딥러닝 기반의 웨이퍼 맵 분류 및 원인 규명 시각화 알고리즘 개발 (삼성전자)',
      contents: [
        {
          title: null,
          contents: [
            '딥러닝 기반의 이상 Wafer 인식기 개발 및 원인규명 시각화 알고리즘 개발을 목적으로 함',
            '엔지니어들의 다양한 사전 지식을 통합적으로 반영하고 모사하고자 함',
            '최근 머신러닝 분야에서 월등한 이미지 처리 성능을 보여주는 딥러닝 구조인 Convolutional Neural Network(CNN)을 사용하여 분류 정확도를 향상시킴',
            'CNN을 사용하여 Wafer Bin Map의 불량의 원인이 되는 위치를 추출 및 파악함'
          ]
        }
      ]
    },
    {
      id: 12,
      img: 'assets/img/projects/12.png',
      term: '2017.05 ~ 2018.03',
      title: '정형/비정형 데이터 기반의 경제 Knowledge Mining  기술 연구 (NCSoft)',
      contents: [
        {
          title: null,
          contents: [
            '주가 데이터(정형)와 뉴스기사(비정형)로부터 의미 있는 Knowledge Extraction을 목적으로 함',
            '뉴스 기사를 통한 네트워크 분석 기반 핵심 이벤트를 추출 및 시각화',
            '뉴스 기사의 representation을 통한 뉴스기사 event pattern 추출',
            '각 기간별 기사의 representation의 유사도를 기준으로 과거 유사 주가 pattern을 추출',
            'Similarity/Distance에 근거한 유사한 과거 탐색 및 주식 동향 예측'
          ]
        }
      ]
    },
    {
      id: 13,
      img: 'assets/img/projects/13.png',
      term: '2017.04 ~ 2018.03',
      title: 'QoE 정보를 이용한 머신러닝 미디어 스트리밍 최적화 시스템 개발 (정보통신기술진흥센터)',
      contents: [
        {
          title: null,
          contents: [
            '동영상 등 대용량 미디어 콘텐츠를 인터넷과 모바일 상에서 효율적으로 서비스하기 위해, CDN (Content Delivary Network)상 콘텐츠를 자동적으로 배치하는 머신러닝 기반의 알고리즘과 라이브러리를 개발함',
            '사용자의 콘텐츠 사용에 대한 QoE(Quality of Experience) Report 수집 기술 개발',
            '멀티 CDN 하에서 성능/가격 최적화를 위한 동적 콘텐츠 배치 및 CDN 선택 알고리즘 개발',
            '단말단 콘텐츠 활용을 위한 QoE(Quality of Experiece) Report 시스템 기술 개발',
            '멀티 CDN하 성능/가격화 최적화 알고리즘'
          ]
        }
      ]
    },
    {
      id: 14,
      img: 'assets/img/projects/14.png',
      term: '2016.08 ~ 2017.02',
      title: '다변량 설비/품질 분석용 병렬 Machine learning/Artificial Intelligence 알고리듬 개발(삼성전자)',
      contents: [
        {
          title: null,
          contents: [
            '“딥러닝 기반의 이상 Wafer 인식기 개발” 을 목적으로 함',
            '엔지니어들의 다양한 사전 지식(domain knowledge)를 통합적으로 반영하고 모사하고자 함',
            '최근 머신러닝 분야에서 월등한 이미지 처리 성능을 보여주는 딥러닝 구조인 Convolutional Neural Network(CNN)을 사용하여 분류 정확도를 향상시키고자 함',
            '삼성전자에서 제공한 EDS Wafer BIN Map 결과와 엔지니어들에 의해 사전 정의된 정상/불량 정보',
            'BIN map을 통해 정상/불량을 판별 가능한 Convolutional Neural Network(CNN) 구조 설계 및 BIN Color schema framework 제시'
          ]
        }
      ]
    },
    {
      id: 15,
      img: 'assets/img/projects/15.png',
      term: '2016.10 ~ 2017.03',
      title: '뉴스와 주가를 이용한 Knowledge Extraction 기술 개발 (NCSoft)',
      contents: [
        {
          title: null,
          contents: [
            '금융 분야에서의 정형/비정형 데이터를 기반으로 의미 있는 정보를 추출',
            'Text(뉴스기사)로부터 정형 데이터(주가)를 해석하는 방법론 개발',
            '뉴스기사로부터 해당 기사의 내용을 함축적으로 표현하는 Keyword 추출 및 일반화',
            'Machine Learning을 활용한 금융/경제 분야 기사와 주가와의 연관성 추출',
            '뉴스 기사와 주가 흐름의 관계를 3가지(실시간, 선행, 후행)측면으로 해석'
          ]
        }
      ]
    },
    {
      id: 16,
      img: 'assets/img/projects/16.png',
      term: '2016.05 ~ 2017.04',
      title: '비정형의 빅데이터를 활용하여 경쟁환경에서 사업자의 신제품 포지셔닝과 다기간 제품 포트폴리오 선정에 도움을 줄 수 있는 전사적 의사결정 시스템의 개발 (연구책임자, 연세대학교 모정훈 교수님)',
      contents: [
        {
          title: null,
          contents: [
            '비정형 형태인 휴대폰에 대한 한글 리뷰 텍스트를 통해 수요분석과 전사적 의사결정에 도움이 되는 시스템 개발',
            '온라인 휴대폰 커뮤니티 사이트(세티즌, 뽐뿌 등)를 통하여 한글 휴대폰 리뷰 텍스트 수집',
            '비정규 형태(신조어, 문법오류 등)의 한글 휴대폰 리뷰 텍스트에 능동적으로 대응하면서 높은 정확도를 나타내는 준지도학습 기반의 자연어 처리 엔진 개발',
            '휴대폰의 기능에 대해 ‘배터리, 화면, 디자인, 스펙, 음질, 촬영, 운영체제 ‘ 7가지의 기능으로 분류하고 해당 리뷰에 대한 기능 점수 할당 및 감정 스코어 추출',
            '자연어 처리 엔진을 바탕으로 휴대폰 도메인에 대한 한국어 감성 어휘 사전을 구축하고 구축된 어휘를 기반으로 하는 텍스트 감성 분석 기술 개발'
          ]
        }
      ]
    },
    {
      id: 17,
      img: 'assets/img/projects/17.png',
      term: '2016.09 ~ 2016.12',
      title: '뉴스 기사 극성 방법론 개발, granted by 시그널코리아',
      contents: [
        {
          title: null,
          contents: [
            '뉴스 기사가 가진 내재적 감성을 정량적 수치로 표현하는 방법론 개발',
            '뉴럴넷 기반의 단어 임베딩 방법론과 머신러닝 기반의 감성 전파 방법론을 이용한 텍스트 감성 분석 기술 적용',
            'Corpus 내 출현 단어에 대해 uni-gram 단위와 bi-gram 단위 두 관점으로 각각의 감성사전을 구축',
            '두개의 감성사전을 ensemble한 최종 뉴스 감성점수 추출',
            '뉴스 기사 기반의 한국어 감성 어휘 사전 구축 및 실제 기사 감성 검수'
          ]
        }
      ]
    },
    {
      id: 18,
      img: 'assets/img/projects/18.png',
      term: '2016.11 ~ 2017.01',
      title: '초음파 관련 임상연구 데이터의 텍스트마이닝 플랫폼 개발, granted by 삼성메디슨',
      contents: [
        {
          title: null,
          contents: [
            '2009년, 2015년에 등록된 의료용 초음파 연구 관련 초록 문헌을 수집',
            '토픽 모델링 기반의 초음파 임상연구 주요 주제 및 트렌드를 분석',
            '초음파 임상연구 관련 주요 키워드와 네트워크를 분석하고 연구자 및 연구기관 간의 협업 네트워크를 분석',
            '의료 연구 관련 주제 및 트렌드 분석, 키워드 네트워크 분석, 연구자 및 연구기관 협업 네트워크 플랫폼 개발을 통한 분석 환경을 제공'
          ]
        }
      ]
    },
    {
      id: 19,
      img: 'assets/img/projects/19.png',
      term: '2016.04 ~ 2016.11',
      title: '보안 데이터 분석을 위한 사용자 행위 모델 연구 (국가보안기술연구소)',
      contents: [
        {
          title: null,
          contents: [
            '기업 내부 및 협력 사 직원에 의한 정보 유출 문제가 보안에서 화두가 되고 있는데 이를 방지하기 위해서 사용자 행위 모델을 구축하고 이를 탐지하기 위한 기계학습/데이터마이닝 알고리즘 개발',
            '시스템 로그 데이터로부터 내부자 위협 탐지 관련 주요 특성(Feature) 추출',
            '개별 그룹 사용자의 대표 사용 패턴 탬플릿 생성 및 정상 사용자와의 유사도 추정 방법론 개발',
            '사용자 행위 그래프 기반의 이상 탐지 방법론 개발',
            '기계학습 기반의 이상 탐지 기법을 이용한 사용자 행위 모델의 활용 가능성 평가'
          ]
        }
      ]
    },
    {
      id: 20,
      img: 'assets/img/projects/20.png',
      term: '2016.03 ~ 2016.08',
      title: 'Information Quality 평가 기술 개발 (NCSoft)',
      contents: [
        {
          title: null,
          contents: [
            '금융 분야에서 대화 형식의 질의에 대한 정형/비정형 데이터를 기반으로 정보를 추출하여 적절한 답변을 제공할 수 있는 질의-응답 방법론 개발',
            '뉴스기사로부터 해당 기사의 내용을 함축적으로 표현하는 Keyword 추출 및 일반화',
            'Machine Learning을 통한 금융/경제 분야 기사의 속성 (속보/ 시황-전망/ 홍보 / 분석 등) 을 자동으로 분류',
            '기업간 주가 변동의 연관성을 통한 동적 네트워크 구축',
            '종목간 네트워크를 통해 기업들의 군집 파악 및 군집 내 발생 기사들을 분석'
          ]
        }
      ]
    },
    {
      id: 21,
      img: 'assets/img/projects/21.png',
      term: '2016.03 ~ 2016.08',
      title: 'Information Quality 평가 기술 개발 (NCSoft)',
      contents: [
        {
          title: null,
          contents: [
            '제품 유형별 특성을 고려한 신제품 수명주기 예측모형 개발',
            '신제품 수명주기 예측모형의 정확도 향상을 위한 최적의 제품 특성값 산출',
            '신제품 수명주기 예측을 바탕으로 수요예측 모형으로의 연계 토대 마련',
          ]
        }
      ]
    },
    {
      id: 22,
      img: 'assets/img/projects/22.png',
      term: '2015.05 ~ 2015.07',
      title: 'Opinion Generation 기술 개발 (NCSoft)',
      contents: [
        {
          title: null,
          contents: [
            '사람의 대화 형식의 질의에 대해 해당 분야(domain)의 정형/비정형 데이터를 기반으로 적절한 답변을 제공하는 질의-응답 방법론 개발',
            '대화형태의 질의를 탐색 가능한 형태의 질의 집합으로 변환',
            '질의 집합에 해당하는 속성에 대해 정형 데이터와 비정형 데이터로부터 필요한 정보를 추출',
            '추출된 정보를 결합하여 평가요소의 긍정/부정의 정도를 표현'
          ]
        }
      ]
    },
    {
      id: 23,
      img: 'assets/img/projects/23.png',
      term: '2014.05 ~ 2017.04',
      title: '빅데이터를 활용한 준지도학습 기반의 한글 자연어처리 엔진 개발 및 응용, (한국연구재단 신진연구자 지원사업)',
      contents: [
        {
          title: null,
          contents: [
            '비정규 형태(신조어, 문법오류 등)의 한글 텍스트에 능동적으로 대응하면서 높은 정확도를 나타내는 준지도학습 기반의 자연어 처리 엔진 개발',
            '높은 정밀도와 재현율을 갖는 한국어 감성 어휘 사전을 구축하고 구축된 어휘를 기반으로 하는 텍스트 감성 분석 기술 개발',
            '자연어 처리 엔진을 바탕으로 감성분석기술을 적용하여 사회 트렌드 분석과 같은 빅데이터 기반 텍스트 분석 및 활용 사례 발굴'
          ]
        }
      ]
    }
  ]

  cooperations = [
    {
      img: "assets/img/main/cooperations/add.jpg",
      name: "국방과학연구소"
    },
    {
      img: "assets/img/main/cooperations/dapa.jpg",
      name: "방위사업청"
    },
    {
      img: "assets/img/main/cooperations/dsme.jpg",
      name: "대우조선해양"
    },
    {
      img: "assets/img/main/cooperations/fss.png",
      name: "금융감독원"
    },
    {
      img: "assets/img/main/cooperations/hyundai.png",
      name: "현대자동차"
    },
    {
      img: "assets/img/main/cooperations/iitp.jpg",
      name: "정보통신기술진흥센터"
    },
    {
      img: "assets/img/main/cooperations/kcb.jpg",
      name: "케이씨비"
    },
    {
      img: "assets/img/main/cooperations/kepco.gif",
      name: "한국전력공사"
    },
    {
      img: "assets/img/main/cooperations/kisti.png",
      name: "한국과학기술정보연구원"
    },
    {
      img: "assets/img/main/cooperations/lgd.jpg",
      name: "엘지디스플레이"
    },
    {
      img: "assets/img/main/cooperations/naver.png",
      name: "네이버"
    },
    {
      img: "assets/img/main/cooperations/ncsoft.jpg",
      name: "엔씨소프트"
    },
    {
      img: "assets/img/main/cooperations/nrf.jpg",
      name: "한국연구재단"
    },
    {
      img: "assets/img/main/cooperations/nsr.png",
      name: "국가보안기술연구소"
    },
    {
      img: "assets/img/main/cooperations/samsung.jpg",
      name: "삼성전자"
    },
    {
      img: "assets/img/main/cooperations/samsungmedison.jpg",
      name: "삼성메디슨"
    },
    {
      img: "assets/img/main/cooperations/signal.jpg",
      name: "시그널코리아"
    },
    {
      img: "assets/img/main/cooperations/skt.jpg",
      name: "에스케이텔레콤"
    }
  ]

  publications = [
    {
      type: 'international-journal',
      title: 'International Journal',
      contents: [
        {
          content: "Donghwa Kim, Deokseong Seo, Suhyoun Cho, Pilsung Kang*. (2019). Multi-co-training for document classification using various document representations: TF–IDF, LDA, and Doc2Vec, Information Sciences 477, 15-29. (SCI).",
          url: null
        },
        {
          content: "Junhong Kim and Pilsung Kang*. (2018). Analyzing International Collaboration and Identifying Core Topics for the \"Internet of Things\" based on Network Analysis and Topic Modeling, International Journal of Industrial Engineering: Theory, Applications and Practice 25(3), 349-369. (SCIE)",
          url: null
        },
        {
          content: "Hakyeon Lee and Pilsung Kang*. (2018). Identifying core topics in technology and innovation management studies: A topic model approach, Journal of Technology Transfer 43(5), 1291-1317. (SSCI)",
          url: null
        },
        {
          content: "Seokho Kang and Pilsung Kang*. (2018). Locally linear embedding for regression, Information Sciences 432, 199-209. (SCI).",
          url: "https://www.sciencedirect.com/science/article/pii/S0020025517303420"
        },
        {
          content: "Gichang Lee, Jaeyun Jeong, Seungwan Seo, Czang Yeob Kim, and Pilsung Kang*. (2018). Sentiment classification with word localization based on weakly supervised learning with a convolutional neural network, Knowledge-based Systems 152, 70-82. (SCI).",
          url: "https://www.sciencedirect.com/science/article/pii/S0950705118301710"
        },
        {
          content: "Junhong Kim, Haedong Kim, and Pilsung Kang*. (2018). Keystroke dynamics-based user authentication using freely typed text based on user-adaptive feature extraction and novelty detection, Applied Soft Computing 62, 1077-1087. (SCIE).",
          url: "https://www.sciencedirect.com/science/article/pii/S1568494617305847"
        },
        {
          content: "Boseop Kim, Hakyeon Lee, and Pilsung Kang*. (2018). Integrating cluster validity indices based on data envelopment analysis, Applied Soft Computing 64, 94-108. (SCIE).",
          url: "https://www.sciencedirect.com/science/article/pii/S1568494617307202"
        },
        {
          content: "Young Joon Park, Hyung Seok Kim, Hankyu Lee, Dongwha Kim, Seoung Bum Kim, and Pilsung Kang*. (2017). A deep learning-based sports player evaluation model based on game statistics and news articles, Knowledge-Based Systems 138, 15-26. (SCI).",
          url: "https://www.sciencedirect.com/science/article/pii/S095070511730446X"
        },
        {
          content: "Daeseon Choi, Younho Lee, Seok Hyun Kim, and Pilsung Kang*. (2017). Undisclosed private attribute inference from Facebook profile data, Industrial Management & Data Systems 117(8), 1687-1706. (SCIE).",
          url: "http://www.emeraldinsight.com/doi/full/10.1108/IMDS-07-2016-0276"
        },
        {
          content: "Taegu Kim, Jungsik Hong and Pilsung Kang* (2017). Box-office forecasting considering competitive environment and word-of-mouth in social networks: A case study of Korean film market. Computational Intelligence and Neuroscience, Volume 2017, Article ID 4315419. (SCIE).",
          url: "https://www.hindawi.com/journals/cin/2017/4315419/"
        },
        {
          content: "Seokho Kang and Pilsung Kang*. (2017). An intelligent virtual metrology system with adaptive update for semiconductor manufacturing, Journal of Process Control 52: 66-74.",
          url: null
        },
        {
          content: "Minhoe Hur, Pilsung Kang, and Sungzoon Cho*. (2016). Box-office forecasting using independent subspace method based on sentiment of movie reviews, Information Sciences 372: 608-624. (SCI).",
          url: "http://www.sciencedirect.com/science/article/pii/S0020025516306016"
        },
        {
          content: "Jongmyung Kim and Pilsung Kang*. (2016). Late payment prediction models for fair allocation of customer contact lists to call center agents, Decision Support Systems 85:84-101. (SCIE).",
          url: "http://www.sciencedirect.com/science/article/pii/S0167923616300264"
        },
        {
          content: "Pilsung Kang, Dongil Kim*, and Sungzoon Cho. (2016). Semi-supervised support vector regression based on self-training with label uncertainty: An application to virtual metrology in semiconductor manufacturing, Expert Systems with Applications 51: 85-106. (SCIE).",
          url: "http://www.sciencedirect.com/science/article/pii/S0957417415008295"
        },
        {
          content: "Taegu Kim, Jungsik Hong, and Pilsung Kang*. (2015). Forecasting box office using machine learning algorithms based on SNS data,International Journal of Forecasting 31(2): 364-390. (April-June). (SSCI).",
          url: "http://ac.els-cdn.com/S0169207014000971/1-s2.0-S0169207014000971-main.pdf?_tid=87ba2ba6-ab69-11e4-8eee-00000aacb360&acdnat=1422943226_7fee434e547d05cd44c16eef2557254b"
        },
        {
          content: "Seokho Kang, Sungzoon Cho, and Pilsung Kang*. (2015). Multi-class classification via heterogeneous ensemble of one-class classifiers, Engineering Applications of Artificial Intelligence 43: 35-43. (SCIE).",
          url: "http://www.sciencedirect.com/science/article/pii/S0952197615000846"
        },
        {
          content: "Pilsung Kang, Kyungil Kim, and Namwook Cho*. (2015). Toll fraud detection of VoIP services via an ensemble of novelty detection algorithms, International Journal of Industrial Engineering: Theory, Applications and Practice 22(2):213-222. (SCIE)",
          url: "https://sites.google.com/site/pskang80/goog_848792091"
        },
        {
          content: "Pilsung Kang* and Sungzoon Cho. (2015). Keystroke dynamics-based user authentication using long and free text strings from various input devices. Information Sciences 308: 72-93. (SCI)",
          url: "http://ac.els-cdn.com/S0020025514009062/1-s2.0-S0020025514009062-main.pdf?_tid=9b217384-ab69-11e4-9cd8-00000aacb361&acdnat=1422943259_4ce239b46fb3e36734abb8bbc4bb6b14"
        },
        {
          content: "Seokho Kang, Pilsung Kang, Taehoon Ko, Sungzoon Cho*, Su-jin Rhee, and Kyung-sang Yu. (2015). An efficient and effective ensemble of support vector machines for anti-diabetic drug failure prediction, Expert Systems with Applications 42(9): 4265-4273. (SCIE)",
          url: "http://ac.els-cdn.com/S0957417415000573/1-s2.0-S0957417415000573-main.pdf?_tid=71455f80-ab69-11e4-8efa-00000aab0f26&acdnat=1422943188_7373189854f3bf5bd5ac78cb719fcd38"
        },
        {
          content: "Pilsung Kang. (2015). The effects of different alphabets on free text keystroke authentication: A case study on the Korean-English users, Journal of Systems and Software 102: 1-11. (SCIE)",
          url: "http://ac.els-cdn.com/S0164121214002842/1-s2.0-S0164121214002842-main.pdf?_tid=4656b9b8-ab69-11e4-b604-00000aacb361&acdnat=1422943116_f43205b1d005e28a689c406aeaf20026"
        },
        {
          content: "Dongil Kim, Pilsung Kang, Seung-kyung Lee, Seokho Kang, Seungyong Doh, and Sungzoon Cho*. (2015). Improving virtual metrology performance by removing metrology noises in a training dataset, Pattern Analysis and Applications 18(1): 173-189. (SCIE)",
          url: "http://link.springer.com/article/10.1007%2Fs10044-013-0363-5"
        },
        {
          content: "Seokho Kang,  Sungzoon Cho, and Pilsung Kang*.  (2015). Constructing a multi-class classifier using one-against-one approach with different binary classifiers, Neurocomputing 149: 677-682. (SCIE)",
          url: "http://ac.els-cdn.com/S0925231214010200/1-s2.0-S0925231214010200-main.pdf?_tid=618814a2-ab69-11e4-9e71-00000aacb35e&acdnat=1422943165_ed069f4989f883fb6db8fd14a47a76a6"
        },
        {
          content: "Pilsung Kang*, Dongil Kim, and Sungzoon Cho. (2014). Evaluating the reliability level of virtual metrology results for flexible process control: a novelty detection-based approach. Pattern Analysis and Applications 17(4): 863-881. (SCIE)",
          url: "http://link.springer.com/article/10.1007%2Fs10044-014-0386-6#page-1"
        },
        {
          content: "Hakyeon Lee, Sanggook Kim, Hyunwoo Park, and Pilsung Kang*. (2014).  Pre-launch new product demand forecasting using the Bass model: A statistical and machine learning-based approach, Technological Forecasting and Social Change, 86: 49-64. (SSCI)",
          url: "http://www.sciencedirect.com/science/article/pii/S0040162513001881"
        },
        {
          content: "Pilsung Kang. (2014). One-class Naive Bayesian classifier with genetic algorithm for toll fraud detection, IEICE Transactions on Information and Systems E97-D(5): 1353-1357. (SCIE)",
          url: "http://search.ieice.org/bin/summary.php?id=e97-d_5_1353"
        },
        {
          content: "Seung-kyung Lee, Pilsung Kang, and Sungzoon Cho*. (2014). Probabilistic local reconstruction for k-NN regression and its application to virtual metrology in semiconductor manufacturing. Neurocomputing 131: 423-439. (SCIE)",
          url: "https://sites.google.com/site/pskang80/goog_2135110821"
        },
        {
          content: "Gulanbaier Tuerhong, Seoung Bum Kim*, Pilsung Kang, and Sungzoon Cho. (2014). Multivariate control chart based on hybrid novelty scores.Communications in Statistics-Simulation and Computation 43(1): 115-131. (SCIE)",
          url: "http://www.tandfonline.com/doi/abs/10.1080/03610918.2012.698775#.VOyOblOsUhI"
        },
        {
          content: "Pilsung Kang. (2013). Locally linear reconstruction based missing value imputation for supervised learning, Neurocomputing 118: 65-78. (SCIE)",
          url: "http://www.sciencedirect.com/science/article/pii/S0925231213002026"
        },
        {
          content: "Pilsung Kang, Sungzoon Cho* and Douglas L. MacLachlan. (2012). Improved response modeling based on clustering, under-sampling, and ensemble. Expert Systems with Applications 39(8): 6738-6753. (SCIE)",
          url: "http://www.sciencedirect.com/science/article/pii/S095741741101699X"
        },
        {
          content: "Pilsung Kang and Sungzoon Cho*. (2012). Support vector class description (SVCD): Classification in kernel space. Intelligent Data Analysis 16(3): 351-364. (SCIE)",
          url: "http://iospress.metapress.com/content/b070528337371028/"
        },
        {
          content: "Dongil Kim, Pilsung Kang, Sungzoon Cho*, Hyoung-joo Lee, and Seungyong Doh. (2012). Machine learning-based novelty detection for faulty wafer detection in semiconductor manufacturing. Expert Systems with Applications 39(4): 4075-4083. (SCIE)",
          url: "http://www.sciencedirect.com/science/article/pii/S0957417411014114"
        },
        {
          content: "Pilsung Kang, Dongil Kim, Hyoung-joo Lee, Seungyong Doh, and Sungzoon Cho*. (2011). Virtual metrology for run-to-run control in semiconductor manufacturing. Expert Systems with Applications 38(3): 2508-2522. (SCIE)",
          url: "http://www.sciencedirect.com/science/article/pii/S0957417410008365"
        },
        {
          content: "Pilsung Kang and Sungzoon Cho*. (2009). A hybrid novelty score and its use in keystroke dynamics-based user authentication. Pattern Recognition 42(11): 3115-3127. (SCI)",
          url: "http://www.sciencedirect.com/science/article/pii/S0031320309001502"
        },
        {
          content: "Pilsung Kang, Hyoung-joo Lee, Sungzoon Cho*, Dongil Kim, Jinwoo Park, Chan-Kyoo Park, and Seungyong Doh. (2009). A virtual metrology system for semiconductor manufacturing. Expert Systems with Applications, 36(10): 12554-12561. (SCIE)",
          url: "http://www.sciencedirect.com/science/article/pii/S0957417409004746"
        },
        {
          content: "Pilsung Kang and Sungzoon Cho. (2009). K-Means clustering seeds initialization based on centrality, sparsity, and isotropy.  Lecture Notes in Computer Science (LNCS) 5788: 109-117.",
          url: "http://link.springer.com/chapter/10.1007%2F978-3-642-04394-9_14#page-1"
        },
        {
          content: "Pilsung Kang, Sunghoon Park, Seong-seob Hwang, Hyoung-joo Lee, and Sungzoon Cho*. (2008). Improvement of keystroke data quality through artificial rhythms and cues. Computers & Security 27(1-2): 3-11. (SCIE)",
          url: "http://www.sciencedirect.com/science/article/pii/S0167404808000023"
        },
        {
          content: "Pilsung Kang and Sungzoon Cho*. (2008). Locally linear reconstruction for instance-based learning. Pattern Recognition 41(11): 3507-3518. (SCI)",
          url: "http://www.sciencedirect.com/science/article/pii/S0031320308001404"
        },
        {
          content: "Pilsung Kang, Seongseob Hwang, and Sungzoon Cho. (2007). Continual retraining of keystroke dynamics based authenticator.  Lecture Notes in Computer Science (LNCS) 4642: 1203-1211.",
          url: "http://link.springer.com/chapter/10.1007%2F978-3-540-74549-5_125#page-1"
        },
        {
          content: "Pilsung Kang and Sungzoon Cho. (2006). EUS SVMs: Ensemble of under-sampled SVMs for data imbalance problems.  Lecture Notes in Computer Science (LNCS) 4232: 837-846.",
          url: "http://link.springer.com/chapter/10.1007%2F11893028_93#page-1"
        },
        {
          content: "Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2006). The effectiveness of artificial rhythms and cues in keystroke dynamics based user authentication. Lecture Notes in Computer Science (LNCS) 3917: 161-162.",
          url: "http://link.springer.com/chapter/10.1007%2F11734628_22"
        }
      ]
    },
    {
      type: 'domestic-journal',
      title: 'Domestic Journal',
      contents: [
        {
          content: "정재윤, 모경현, 서승완, 김창엽, 김해동, 강필성*. (2018). 워드 임베딩과 단어 네트워크 분석을 활용한 비지도학습 기반의 문서 다중 범주 가중치 산출: 휴대폰 리뷰를 중심으로. 대한산업공학회지 44(6), 442-451.",
          url: null
        },
        {
          content: "박재선, 김준홍, 김형석, 모경현, 강필성*. (2018). 합성곱 신경망을 이용한 웨이퍼 맵 기반 불량 탐지. 대한산업공학회지 44(4), 249-258.",
          url: null
        },
        {
          content: "모경현, 박재선, 장명준, 강필성*. (2018). 단어와 자소 기반 합성곱 신경망을 이용한 문서 분류. 대한산업공학회지 44(3), 180-188.",
          url: null
        },
        {
          content: "서덕성, 모경현, 박재선, 이기창, 강필성*. (2017). 워드임베딩과 그래프 기반 준지도학습을 통한 한국어 어휘 감성 점수 산출. 대한산업공학회지 43(5), 330-340.",
          url: null
        },
        {
          content: "김해동, 김준홍, 박민식, 조수현, 강필성*. (2017). 사용자 행위 모델과 이상치 탐지 알고리즘을 활용한 내부자 이상행위 탐지. 대한산업공학회지 43(4), 276-287.",
          url: null
        },
        {
          content: "김준홍, 서덕성, 김해동, 강필성*. (2017). 인스타그램 기반의 전이학습과 게시글 메타 정보를 활용한 페이스북 스팸 게시글 판별. 대한산업공학회지 43(3), 192-202.",
          url: null
        },
        {
          content: "조수현, 김보섭, 박민식, 이기창, 강필성*. (2017). 여행 사이트 리뷰를 활용한 관광지 만족도 요인 추출 및 평가. 대한산업공학회지 43(1), 62-71.",
          url: null
        },
        {
          content: "류나현, 김형석, 강필성*. (2016). 다중선형회귀모형에서의 변수선택기법 평가. 대한산업공학회지 42(5), 314-326.",
          url: null
        },
        {
          content: "서동민, 강필성*. (2016). 자유로운 문자열의 키스트로크 다이나믹스와 일범주 분류기를 활용한 사용자 인증. 대한산업공학회지 42(4), 280-289.",
          url: null
        },
        {
          content: "류기동, 김종명, 금영정, 강필성, 김우제*. (2016). 연관 규칙 분석을 활용한 ARS 추천 메뉴 시스템 연구. 한국정보기술학회 논문지 14(3), 127-136.",
          url: null
        },
        {
          content: "박철수, 장병만, 강필성*. 파트너관계관리 성공요인의 중요도 분석. 경영과학지. (2015), 경영과학 32(4), 45-56.",
          url: null
        },
        {
          content: "박희진, 장경애, 김우제, 이윤호, 강필성*. 데이터마이닝 기법을 활용한 대학수학능력시험 영어영역 정답률 예측 및 주요 요인 분석. (2015). 정보처리학회논문지 – 소프트웨어 및 데이터공학, 4(11), 509-520.",
          url: null
        },
        {
          content: "Pilsung Kang, Youngjung Geum, Hyun-woo Park, Sang-gook Kim, Tae-eung Sung, and Hakyeon Lee*. (2015). A market-based replacement cost approach to technology valuation,  Journal of the Korean Institute of Industrial Engineers (JKIIE) 41(2): 150-161",
          url: null
        },
        {
          content: "Hyungchoong Baek and Pilsung Kang*. (2014). A priority analysis on influential factors for the success of project management office (PMO) in public sectors based on analytic hierarchy process (AHP), Journal of Korea Industry and Systems Engineering, 37(4): 42-53.",
          url: null
        },
        {
          content: "Chulsoo Park and Pilsung Kang*. (2014). The analysis of large-scale discount store location on the performance of dairy product agencies and its importance factor for agency assessment, Journal of Channel and Retailing, 19(4): 63-90.",
          url: null
        },
        {
          content: "Jongchan Lee and Pilsung Kang*. (2014). Designing and prioritizing ICT service attributes for cognitive rehabilitation using quality function deployment, Journal of Korean Institute of Information Technology, 12(6): 77-90.",
          url: null
        },
        {
          content: "Hyunjoong Kim, Sungzoon Cho and Pilsung Kang*. (2014). KR-WordRank: A Korean word extraction method based on WordRank and unsupervised learning,  Journal of the Korean Institute of Industrial Engineers (JKIIE), 40(1): 18-33.",
          url: null
        },
        {
          content: "Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim*. (2014). Analysis on the Voting Activities of the 18th National Assembly of the South Korea based on the Member-level Similarity, Journal of the Korean Institute of Industrial Engineers (JKIIE), 40(1): 60-83.",
          url: null
        },
        {
          content: "Pilsung Kang. (2012). Missing value imputation based on locally linear reconstruction for improving classification performance, Journal of the Korean Institute of Industrial Engineers (JKIIE), 38(4): 276-284.",
          url: null
        },
        {
          content: "Pilsung Kang and Sungzoon Cho*. (2012). A study on user authentication based on keystroke dynamics of long and free texts. IE Interface, 25(3): 290-299.",
          url: null
        },
        {
          content: "Pilsung Kang, Dongil Kim, Seung-kyung Lee, Seungyong Doh, and Sungzoon Cho*. (2012). Estimating the reliability of virtual metrology predictions in semiconductor manufacturing: A novelty detection-based approach. Journal of the Korean Institute of Industrial Engineers (JKIIE), 38(1): 46-56.",
          url: null
        }
      ]
    },
    {
      type: 'international-conference',
      title: 'International Conference',
      contents: [
        {
          content: "Myeongjun Jang, Pilsung Kang.* (2018) Sentence Embedding Module Satisfying a Characteristic of Human Language Recognition. INFORMS 2018 Annual Meeting, Phoenix, AZ, Nov. 4-7.",
          url: null
        },
        {
          content: "Seungwan Seo, Deokseong  Seo, Myungjun Jang, Jaeyun Jung, Philsung Kang* (2018) Identifying and visualizing uncommon customer response on machine learning. INFORMS 2018 Annual Meeting, Phoenix, AZ, Nov. 4-7.",
          url: null
        },
        {
          content: "Donghwa Kim, Deokseong Seo, Suhyoun Cho, Pilsung Kang.* (2017) Multi-co-training for Document Classification using Multi-views. INFORMS 2017 Annual Meeting, Houston, TX, Oct. 22-25.",
          url: null
        },
        {
          content: "Czang Yeob Kim, Pilsung Kang.* (2017) Aspect Extraction and Polarity Classification of Reviews Based on Deep Neural Network. INFORMS 2017 Annual Meeting, Houston, TX, Oct. 22-25.",
          url: null
        },
        {
          content: "Hyungseok Kim, Boseop Kim, and Pilsung Kang.* (2016) Evaluating information quality for news articles based on topic modeling. INFORMS 2016 Annual Meeting, Nashville, TN, Nov. 13-16.",
          url: null
        },
        {
          content: "Junhong Kim, Haedong Kim, Boseop Kim, and Pilsung Kang.* (2016) Strengthening free-text keystroke dynamics based user authentication based on user-adaptive feature construction for one-class classification. INFORMS 2016 Annual Meeting, Nashville, TN, Nov. 13-16.",
          url: null
        },
        {
          content: "Pilsung Kang, Kyungil Kim, and Nam-Wook Cho. (2013). Toll Fraud Detection of VoIP Services via an Ensemble of Novelty Detection Algorithms, The 17th International Conference on Industrial Engineering Theory, Applications and Practice, Busan, Republic of Korea, Oct. 6-9.",
          url: null
        },
        {
          content: "Pilsung Kang, Sanggook Kim, Hyunwoo Park, and Hakyeon Lee. (2013). Pre-launch new product demand forecasting based on the Bass diffusion model and an ensemble of regression algorithms, The 2nd International Symposium on System Informatics and Engineering (ISSIE2013), Xian, China.",
          url: null
        },
        {
          content: "Hyun-joong Kim, Sungzoon Cho, and Pilsung Kang. (2013). Improving word segmentation with unlabeled data, The 2nd International Symposium on System Informatics and Engineering (ISSIE2013), Xian, China.",
          url: null
        },
        {
          content: "Minhoe Hur, Sungzoon Cho, and Pilsung Kang. (2013). A hierarchical Bayesian model to predict Box-office audience of motion pictures, The 2nd International Symposium on System Informatics and Engineering (ISSIE2013), Xian, China.",
          url: null
        },
        {
          content: "Taegu Kim, Jungsik Hong, and Pilsung Kang. (2013). Forecasting the Box-Office of motion pictures using social network service data with an ensemble of machine learning algorithm, The International Symposium on Forecasting (ISF 2013), Seoul, Republic of Korea. (Student Travel Granted)",
          url: null
        },
        {
          content: "Pilsung Kang and Sungzoon Cho. (2011). Keystroke dynamics-based user verification – Who is typing now? INFORMS Annual Meeting (INFORMS 2011), Charolette, NC, USA.",
          url: null
        },
        {
          content: "Gulanbaier Tuerhong, Pilsung Kang, Sungzoon Cho, Seoung Bum Kim (2011). Integration of novelty score algorithm and control chart technique. INFORMS Annual Meeting (INFORMS 2011), Charolette, NC, USA.",
          url: null
        },
        {
          content: "Pilsung Kang and Sungzoon Cho. (2009). K-Means clustering seeds initialization based on centrality, sparsity, and isotropy. The 13th International Conferenceon Intelligent Data Engineering and Automated Learning (IDEAL 2009), Burgos, Spain. E. Corchado and H. Yin (Eds.), Lecture Notes in Computer Science LNCS 5788, 109-117.",
          url: null
        },
        {
          content: "Pilsung Kang and Sungzoon Cho. (2008). Novelty detection based on distance and topological relation. INFORMS Annual Meeting (INFORMS 2008), Washington D.C., USA.",
          url: null
        },
        {
          content: "Pilsung Kang and Sungzoon Cho. (2007). Customer data reconstruction methods for response modeling. INFORMS Annual Meeting (INFORMS 2007), Seattle, W.A., USA.",
          url: null
        },
        {
          content: "Pilsung Kang, Seongseob Hwang, and Sungzoon Cho. (2007). Continual retraining of keystroke dynamics based authenticator. The 2nd International Conference on Biometrics (ICB 2007), Seoul, Korea. S.-W. Lee and S.Z. Li (Eds.),Lecture Notes in Computer Science LNCS 4642, 1203-1211.",
          url: null
        },
        {
          content: "Pilsung Kang and Sungzoon Cho. (2006). EUS SVMSs: Ensemble of under-sampled SVMs for data imbalance problems. The 13th International Conference on Neural Information Processing (ICONIP 2006), Hong Kong, China. I. King, J. Wang, L. Chan, and D. Wang (Eds.), Lecture Notes in Computer Science LNCS 4232, 837-846.",
          url: null
        },
        {
          content: "Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2006). The effectiveness of artificial rhythms and cues in keystroke dynamics based user authentication. Workshop on Intelligence and Security Informatics (WISI 2006), Singapore. H. Chen, F.Y. Wang, C.C. Yang, D. Zeng, M. Chau, and K. Chang (Eds.), Lecture Notes in Computer Science LNCS 3917, 161-162.",
          url: null
        }
      ]
    },
    {
      type: 'domestic-conference',
      title: 'Domestic Conference',
      contents: [
        {
          content: '김창엽, 박민식, 서승완, 장명준, 정민성, 강필성.(2018) 이상치 탐지 알고리즘을 활용한 시스템 및 네트워크 이상 행위 탐지, 한국데이터마이닝학회 추계학술대회, 서울대학교, 서울, 11월 30일.',
          url: null
        },
        {
          content: '김준홍, 정재윤, 송서하, 양우식, 강필성. (2018) Recurrent neural network based smartphone user authentication with freely typed keystroke and drawing data, 한국데이터마이닝학회 추계학술대회, 서울대학교, 서울, 11월 30일.',
          url: null
        },
        {
          content: '박민식, 김창엽, 서승완, 장명준, 정민성, 강필성.(2018) 이상치 탐지 알고리즘을 활용한 네트워크 이상 행위 탐지, 한국데이터마이닝학회 추계학술대회, 서울대학교, 서울, 11월 30일.',
          url: null
        },
        {
          content: '양우식, 김동화, 김형석, 송서하, 강필성. (2018) 예측 알고리즘 Prophet을 활용한 CDN환경에서의 콘텐치 캐싱 기법 연구, 한국데이터마이닝학회 추계학술대회, 서울대학교, 서울, 11월 30일.',
          url: null
        },
        {
          content: '장명준, 김창엽, 서승완, 박경찬, 강필성. (2018) 비지도학습 이상치 탐지 알고리즘을 이용한 시스템 이상상태 탐지 방법론, 한국데이터마이닝학회 추계학술대회, 서울대학교, 서울, 11월 30일.',
          url: null
        },
        {
          content: '최희정, 박민식, 정재윤, 손규빈, 모경현, 박재선, 강필성.(2018) 해상 이미지 데이터와 합성곱 신경망을 활용한 유의파고 예측, 대한산업공학회 추계학술대회, 한양대학교, 서울, 11월 9일.',
          url: null
        },
        {
          content: '김동화, 김준홍, 김창엽, 강필성. (2018) Structural MRI 이용한 청소년기 주요 우울 장애 분류 모델, 대한산업공학회 추계학술대회, 한양대학교, 서울, 11월 9일.',
          url: null
        },
        {
          content: '김준홍, 문지훈, 황은준, 강필성. (2018) Recurrent inception convolution neural network for multi short term load forecasting, 대한산업공학회 추계학술대회, 한양대학교, 서울, 11월 9일.',
          url: null
        },
        {
          content: '장명준, 강필성. (2018) Paraphrase Thought: Sentence Embedding Module Imitating Human Language Recognition, 대한산업공학회 추계학술대회, 한양대학교, 서울, 11월 9일.',
          url: null
        },
        {
          content: '김준홍, 김동화, 손규빈, 강필성. (2018) Short-Long term wafer bin map outlier detection based on convolution autoencoder and Isola-tion forest, 대한산업공학회 추계학술대회, 한양대학교, 서울, 11월 9일.',
          url: null
        },
        {
          content: '송서하, 강필성. (2018) 텍스트 데이터를 활용한 조기경보모형 개발, 대한산업공학회 추계학술대회, 한양대학교, 서울, 11월 9일.',
          url: null
        },
        {
          content: '김준홍, 박재선, 박민식, 정재윤, 강필성. (2018) CAM과 Grad-CAM 기반의 불량 웨이퍼 bin map 분류 및 원인 지역 시각화 방법론, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
          url: null
        },
        {
          content: '김창엽, 서승완, 김해동, 모경현, 강필성. (2018) 딥러닝 기반의 감성 분석을 위한 비교 연구, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
          url: null
        },
        {
          content: '김형석, 김동화, 이기창, 정세희, 박희환, 강필성. (2018) 뉴스기사와 주가 데이터를 활용한 종목 추천 Knowledge Base 구축 방법론, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
          url: null
        },
        {
          content: '장명준, 김창엽, 서승완, 강필성. (2018) Distance Decomposition for Extracting Variable Importance of Distance-based Novelty Detection, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
          url: null
        },
        {
          content: '장명준, 서승완, 강필성. (2018) Recurrent Neural Network-based Semantic Variational Autoencoder for Sequence to Sequence Learning, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
          url: null
        },
        {
          content: '정재윤, 서덕성, 서승완, 장명준, 강필성. (2018) 머신러닝 및 텍스트 마이닝 기반의 VDS 고객 불만 분석 기법 개발, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
          url: null
        },
        {
          content: '김준홍, 김형석, 박재선, 모경현. 강필성. (2017) 웨이퍼 Bin Map 데이터 기반의 불량 탐지 및 시각화를 위한 Bin2Vec 기반의 합성곱 신경망 분류기 ,대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
          url: null
        },
        {
          content: '김준홍, 강필성. (2017) 자유로운 문자열 기반의 사용자 인증을 위한 LSTM 기반 이상치 탐지 기법 ,대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
          url: null
        },
        {
          content: '모경현, 박재선, 장명준, 강필성. (2017) 단어와 자소 기반 합성곱 신경망을 이용한 문서 분류, 대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
          url: null
        },
        {
          content: '이기창, 정재윤, 서승완, 김창엽, 강필성. (2017) 합성곱 신경망을 사용한 약지도학습 기반의 감성분류 및 단어 어텐션, 대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
          url: null
        },
        {
          content: '박민식, 이기창, 김보섭, 김창엽, 강필성. (2017).  워드 임베딩을 활용한 휴대폰 리뷰에서의 핵심 대상 기능 추출, 2017 춘계 공동학술대회, 여수 EXPO 컨벤션센터, 여수, 4월 26일 ~ 4월 29일.',
          url: null
        },
        {
          content: '이기창, 강필성. (2017).  Graph-based representation을 활용한 뉴스 중요도 산출, 2017 춘계 공동학술대회, 여수 EXPO 컨벤션센터, 여수, 4월 26일 ~ 4월 29일.',
          url: null
        },
        {
          content: '김형석, 류나현, 김보섭, 서덕성, 강필성. (2016). 토픽모델링 기반 뉴스기사 평가 방법론, 2016 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
          url: null
        },
        {
          content: '김준홍, 서덕성, 김해동, 강필성. (2016). Facebook text spam filtering based on keywords learned from Instagram and meta-information of Facebook posts, 2016 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
          url: null
        },
        {
          content: '김보섭, 조수현, 박민식, 강필성. (2016). 관광지 평가 댓글을 활용한 만족도 요인 추출과 관광지 평가, 2016, 대한산업공학회 추계학술대회 산업융합 활성화 방안 및 사례 연구 논문 공모전, 고려대학교, 서울, 11월 19일. (논문공모전 우수상) [pdf]',
          url: null
        },
        {
          content: '김준홍, 박민식, 김해동, 조수현, 이대우, 양경아, 김기헌, 강필성. (2016). 이상치 탐지 기법을 활용한 내부자 위협 탐지 방법론 개발, 2016, 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
          url: null
        },
        {
          content: '서덕성, 모경현, 박재선, 이기창, 강필성. (2016). Word sentiment score evaluation based on semi supervised learning in a distributed representation, 2016 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
          url: null
        },
        {
          content: '김준홍, 강필성. (2016). 토픽모델링과 사회연결망 분석을 활용한 ‘사물인터넷’ 연구동향 분석, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '이학연, 강필성. (2016). 토픽 모델링을 이용한 기술경영 분야 연구 동향 분석, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '박영준, 김형석, 김동화, 이한규, 김보섭, 류나현, 김성범, 강필성. (2016). 야구 기사와 선수 기록을 활용한 딥러닝 기반 극성 판별 모델 개발, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '김형석, 박민식, 강필성. (2016). 토픽모델링과 사회연결망을 이용한 딥러닝 분야 연구 동향 분석, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '김준홍, 김해동 강필성. (2016). 자유로운 문자열을 활용한 향상된 키스트로크 다이나믹스 인증 방법 개발, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '류나현, 김형석, 강필성. (2016). Evaluating Variable Selection Techniques for Linear Regression, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '김보섭, 강필성, 이학연. (2016). 자료포락분석법(DEA)를 활용한 군집타당성분석에 관한 연구, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '김동화, 서덕성, 조수현, 강필성. (2016). Multi-Co-Training을 활용한 문서 분류, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
          url: null
        },
        {
          content: '김준홍, 김해동 강필성. (2016). 일범주 분류기와 자유로운 문자열 기반의 사용자 인증 방법론, 2016 BI데이터마이닝학회 춘계학술대회, 서울 코엑스, 서울, 4월 12일.',
          url: null
        },
        {
          content: '김동화, 서덕성, 조수현, 강필성. (2016). 나이브베이즈 분류기 기반의 협동학습을 활용한 문서 분류, 2016 BI데이터마이닝학회 춘계학술대회, 서울 코엑스, 서울, 4월 12일.',
          url: null
        },
        {
          content: '서동민, 강필성. (2015). 자유로운 문자열 입력에 대한 키스트로크 다이나믹스 기반 사용자 인증, 2015 대한산업공학회 추계학술대회, 연세대학교, 서울, 11월 7일. (석사논문경진대회 우수상) [pdf]',
          url: null
        },
        {
          content: '김형석, 박영준, 이한규, 김동화, 김보섭, 류나현, 강필성, 김성범. (2015). 야구 기사와 선수 기록을 활용한 딥러닝 기반 극성 판별 모델의 개발, 2015 대한산업공학회 추계학술대회, 연세대학교 , 서울, 11월 8일. [pdf]',
          url: null
        },
        {
          content: '고태훈, 김현중, 강필성, 조성준. (2015). Fast novelty detection algorithm and its use in early fault detection for manufacturing process, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
          url: null
        },
        {
          content: '김현중, 박은정, 김미숙, 김한결, 강필성, 조성준. (2015). 고속 문서 군집화를 위한 의사 단어 벡터 표현, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
          url: null
        },
        {
          content: '서동민, 김준홍, 강필성. (2015). 자유로운 문자열 입력에 대한 키스트로크 다이나믹스 기반 사용자 인증, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
          url: null
        },
        {
          content: '박희진, 장경애, 이윤호, 김우제, 강필성. (2015). 텍스트마이닝을 이용한 대학수학능력시험 영어영역 정답률 예측, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
          url: null
        },
        {
          content: '김현중, 강필성, 조성준. (2014). 데이터마이닝 알고리즘을 위한 효율적 k-NN Graph 계산, 대한산업공학회 추계학술대회, 경기대학교, 수원, 11월 22일.',
          url: null
        },
        {
          content: '신우섭, 강필성. (2014). 연관규칙분석을 이용한 기업체 교육프로그램 추천,  대한산업공학회 추계학술대회, 경기대학교, 수원, 11월 22일.',
          url: null
        },
        {
          content: '송성민, 김준홍, 민혜종, 강필성. (2014). 데이터마이닝 기법을 이용한 요양기관 생존 여부 및 매출 예측, 대한산업공학회 추계학술대회, 경기대학교, 수원, 11월 22일.',
          url: null
        },
        {
          content: '백형충, 강필성. (2014). 계층분석기법 기반 공공사업 PMO제도 활성화요인 우선순위 분석, 한국산업경영시스템학회 춘계학술대회, 한양대학교 ERICA 캠퍼스, 안산, 5월 10일. (우수연구상)',
          url: null
        },
        {
          content: '이종찬, 강필성. (2014). 품질기능전개를 이용한 인지재활 ICT 서비스 요구사항 및 우선순위 도출, 한국산업경영시스템학회 춘계학술대회, 한양대학교 ERICA 캠퍼스, 안산, 5월 10일.',
          url: null
        },
        {
          content: 'Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim. (2013). Analysis on the voting activities of  national assembly based on network analysis, Korean BI Data Mining Conference (Fall), Sokcho, Nov. 29-30.',
          url: null
        },
        {
          content: 'Hyunjoong Kim, Minhoe Hur, Pilsung Kang, and Sungzoon Cho. (2013). MovieRank: Combining structural and feature information ranking measure. Korean BI Data Mining Conference (Fall), Sokcho, South Korea, Nov. 29-30.',
          url: null
        },
        {
          content: 'Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim. (2013). Analysis on the voting activities of  national assembly: A case study of South Korea, Korean Institute of Industrial Engineers Conference (Fall), Seoul, South Korea, Nov. 15.',
          url: null
        },
        {
          content: '김종명, 강필성. (2013). 종합유선방송 연체고객 미수납금 회수 여부 예측모델 구축, 한국경영과학회 추계학술대회, 이화여자대학교, 서울, 11월 2일.',
          url: null
        },
        {
          content: 'Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim. (2013). Analysis on the Voting Activities of the 18th National Assembly of the South Korea, Korean Operations Research and Management Science Conference (Fall), Seoul, South Korea, Nov. 2.',
          url: null
        },
        {
          content: 'Pilsung Kang. (2013). How you type tells who you are: Keystroke dynamics-based user authentication, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
          url: null
        },
        {
          content: 'Hyun-joong Kim, Sungzoon Cho, and Pilsung Kang. (2013). Unsupervised approach for Korean word extraction and segmentation, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
          url: null
        },
        {
          content: 'Minhoe Hur, Pilsung Kang, and Sungzoon Cho. (2013). Box-Office prediction based on opinion mining, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
          url: null
        },
        {
          content: 'Taehoon Ko, Eunjung Park, Hyunjoong Kim, Pilsung Kang, and Sungzoon Cho. (2013). Comparing the popularity of TV programs through review site and Twitter, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Sanggook Kim, Hyunwoo Park, and Hakyeon Lee. (2012). Estimating the parameters of the bass model based on product attributes for forecasting a new product’s life cycle, Korean Operations Research and ManagementScience Conference (Fall), Seoul, South Korea.',
          url: null
        },
        {
          content: 'Dongil Kim, Pilsung Kang, Seung-kyung Lee, and Sungzoon Cho. (2012). A method of recovering unlabeled data and selecting training data for semisupervised support vector regression, Korean Operations Research and Management Science Conference (Fall), Seoul, South Korea.',
          url: null
        },
        {
          content: 'Seung-kyung Lee, Pilsung Kang, and Sungzoon Cho. (2012). Probabilistic local reconstruction in k-NN regression problem, Korean Operations Research and Management Science Conference (Fall), Seoul, South Korea.',
          url: null
        },
        {
          content: 'Dongil Kim, Pilsung Kang, Seung-kyung Lee, Seokho Kang, Seungyong Doh, and Sungzoon Cho. (2011). Data quality improvement for virtual metrology based on novelty detection techniques, Korean Data Mining Society Conference (Fall), Seoul, South Korea.',
          url: null
        },
        {
          content: 'Gulanbaier Tuerhong, Seoung Bum Kim, Pilsung Kang, Sungzoon Cho (2011). Integration of novelty score algorithm and control chart technique. Korean Data Mining Society Conference (Spring), Seoul, South Korea.',
          url: null
        },
        {
          content: 'Joosung Park, Pilsung Kang, Sunghoon Park, Joonha Yoon, and Sungzoon Cho (2010). User authentication based on free style text with kolmogorov-smirnov test. Korean Institute of Industrial Engineers Conference, Jeju, South Korea.',
          url: null
        },
        {
          content: 'Joosung Park, Pilsung Kang, Sunghoon Park, Joonha Yoon, and Sungzoon Cho (2010). Touch screen-based keystroke dynamics analysis with long & free text. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Gulanbaier Tuerhong, Pilsung Kang, Sungzoon Cho, and Seoung Bum Kim (2010). Hybrid novelty score-based control chart for multivariate process monitoring. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Sunghoon Park, Jun-Ha Yoon, Misuk Kim, Jooseoung Park, and Sungzoon Cho. (2009). Keystroke dynamics analysis based on long & free text. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Sunghoon Park, Taehoon Ko, Misuk Kim, Jun-Ha Yoon, Jooseoung Park, and Sungzoon Cho. (2009). Stylus pen-based keystroke dynamics analysis. Korean Institute of Industrial Engineers Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Dongil Kim, Pilsung Kang, Sungzoon Cho, Hyoung-joo Lee, and Seungyong Doh. (2009). Detection of faulty wafers based on novelty detection approaches in semiconductor manufacturing. Korean Operations Research and Management Science Society Conference, Busan, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Dongil Kim, Seungkyoung Lee, and Sungzoon Cho. (2009). Novelty detection for process control in semiconductor manufacturing. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang and Sungzoon Cho. (2008). Seed initialization for k-means clustering based on local topology. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Dongil Kim, and Sungzoon Cho. (2008). Development of virtual metrology and run-to-run control system in semiconductor manufacturing based on data mining techniques. Korean Institute of Industrial Engineers Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang and Sungzoon Cho. (2008). Locally linear reconstruction for novelty detection. Korean Operations Research and Management Science Society Conference, Pohang, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang and Sungzoon Cho. (2007). Classification in kernel space with 2-SVDD. Korean Data Mining Society Conference, Seoul, South Korea. (Best Paper Award)',
          url: null
        },
        {
          content: 'Pilsung Kang and Sungzoon Cho. (2006). Sampling methods for response modeling. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang and Sungzoon Cho. (2006). Under-sampling based ensemble SVMs for class imbalance. Korean Operations Research and Management Science Society Conference, Daejeon, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2006). The effect of artificial rhythms and cues on keystroke dynamics analysis.The Workshop on Biometrics Engineering Research Center, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2005). The use of artificial rhythms and cues for keystroke dynamics-based authentication. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Sungzoon Cho, and Hyoung-joo Lee. (2004). An ensemble technique for class imbalance problem. Korean Data Mining Society Conference, Seoul, South Korea.',
          url: null
        },
        {
          content: 'Pilsung Kang, Hyoung-joo Lee, and Sungzoon Cho. (2004). SVM ensemble techniques for class imbalance problem. Korean Information Science Society Conference, Seoul, South Korea.',
          url: null
        }
      ]
    }
  ]
}
