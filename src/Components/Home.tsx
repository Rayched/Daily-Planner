import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface I_Charactors {
    charNm: string;
}

const Homes = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Titles = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0px;

    h3 {
        font-size: 20px;
        font-weight: bold;
    }
`;

function Home(){
    const Navigate = useNavigate();
    /**
     * 'react router dom'의 useNavigate() Hook 통해서
     * 내가 입력한 검색어를 '/[:charNm]'으로 보낼 수 있었다
     */

    const {register, handleSubmit} = useForm<I_Charactors>();

    const onValid = (data: I_Charactors) => {
        Navigate(`/${data.charNm}`);
    };

    return (
        <Homes>
            <Titles>
                <h3>
                    Maple Scheduler in Web
                </h3>
            </Titles>
            <form onSubmit={handleSubmit(onValid)}>
                <input 
                    type="text" 
                    placeholder="캐릭터 이름을 입력해주세요."
                    {...register("charNm", {required: "캐릭터 이름을 입력해주세요."})}
                />
                <button>검색</button>
            </form>
            <div></div>
        </Homes>
    );
};

export default Home;