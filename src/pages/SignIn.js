import React from 'react';

const SignIn = () => {
    const [account, setAccount] = React.useState({});

    /**
     *
     */
    const handleChangeAccount = (name, value) => {
        // account를 함수로 따로 설정하면 예외처리등 로직 작성이 가능
        setAccount({
            ...account,
            [name]: value
        })
    }

    /**
     * 로그인 함수
     * --
     */
    const handleAccountSignIn = () => {
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: account }),
        };
        fetch('http://localhost:3001/users/signIn', params)
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    alert('로그인 성공!')
                } else {
                    alert('계정 확인!!!!')
                }
            })
    }

    /* RENDER */
    return (
        <React.Fragment>
            <h4>Sign in</h4>
            <div className="row justify-content-center text-left my-5">
                <div className="col-4">
                    <div className="form-group">
                        <label for="userEmail">이메일</label>
                        <input type="email" name="userEmail" className="form-control" id="userEmail"
                            onChange={e => handleChangeAccount(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="userPassword">비밀번호</label>
                        <input type="password" name="userPassword" className="form-control" id="userPassword"
                            onChange={e=>handleChangeAccount(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" name="checkMeOut" className="form-check-input" id="checkAccount" />
                        <label className="form-check-label" for="checkAccount">Check me out</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleAccountSignIn}>로그인</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignIn;
