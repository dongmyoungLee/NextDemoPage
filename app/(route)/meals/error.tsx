'use client';


/*
* error.js에 저장된 error 컴포넌트는 꼭 클라이언트 컴포넌트여야 합니다

  NextJS는 기본적으로 클라이언트 측에서 발생하는 오류를 포함한, 해당 컴포넌트의 모든 오류를

   잡을 수 있도록 보장하기 때문입니다
*
*
* */
export default function Error() {
    return (
        <main className="error">
            <h1>ERROR</h1>
            <p>Failed</p>
        </main>
    )
}