import styled from 'styled-components'

export const Form = styled.form`

    display: flex;
    z-index: 10;
    position: relative;
    width: 400px;
    margin: 16px auto;
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.3);
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    flex-flow: column;
    border-radius:15px;
`

export const Input = styled.input`

    border: 0;
    padding: 12px 16px;
    margin: 8px;
    background: #fff;
    font-size: 1rem;
    width: 240px;
    border-radius: 0;
    outline: 0;
    border: 1px solid #d4d4d4;
    border-radius: 6px;
`