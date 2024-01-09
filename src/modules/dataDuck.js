//Ducks 패턴은 Redux 애플리케이션에서 액션 타입, 액션 생성자, 리듀서를 한 파일에 함께 정의하는 방식
/*
// 액션 타입 정의
const DATA_REQUEST = 'data/DATA_REQUEST';
const DATA_SUCCESS = 'data/DATA_SUCCESS';
const DATA_FAILURE = 'data/DATA_FAILURE';

// 액션 생성자 함수 정의
export const getDataRequest = () => ({
    type: DATA_REQUEST,
});

export const getDataSuccess = (data) => ({
    type: DATA_SUCCESS,
    payload: data,
});

export const getDataFailure = (error) => ({
    type: DATA_FAILURE,
    payload: error,
});

// 초기 상태 정의
const initialState = {
    data: [],
    loading: false,
    error: null,
};

// 리듀서 함수 정의
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        case DATA_FAILURE:
            return { ...state, loading: false, data: [], error: action.payload };
        default:
            return state;
    }
};

// 비동기 작업을 처리하는 액션 생성자 함수
//thunk 사용 예제
export const getDatas = () => async (dispatch) => {
    try {
        // 데이터 요청을 시작함을 나타내는 액션 디스패치
        dispatch(getDataRequest());

        // 비동기 작업 수행 (예: API 호출)
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();

        // 데이터를 성공적으로 불러왔을 때의 액션 디스패치
        dispatch(getDataSuccess(data));
    } catch (error) {
        // 데이터 불러오기 실패 시의 액션 디스패치
        dispatch(getDataFailure(error.message));
    }
};

// 모듈의 기본 리듀서를 내보냄
export default dataReducer;*/