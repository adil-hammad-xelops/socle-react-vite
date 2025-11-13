import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
`;

export const LoginCard = styled.div`
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    padding: 3rem;
    max-width: 400px;
    width: 100%;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 480px) {
        padding: 2rem;
        margin: 1rem;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 2rem;
`;

export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);

    &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%);
    }

    &:active:not(:disabled) {
        transform: translateY(0px);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

export const ErrorMessage = styled.div`
    background: rgba(254, 215, 215, 0.9);
    color: #c53030;
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    text-align: center;
    border-left: 4px solid #e53e3e;
    backdrop-filter: blur(5px);
`;

export const LoadingSpinner = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
