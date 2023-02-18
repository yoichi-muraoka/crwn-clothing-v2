import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .checkout-table-row {
        display: flex;
        gap: 20px;

        img {
            width: 200px;
        }

        .price {
            font-size: 1rem;
        }

        .quantity {
            font-size: 1.5rem;
            width: 3em;
            text-align: center;
            margin: 0 0.2em;
        }

        .change-quantity {
            font-size: 1.5rem;
            &:hover {
                cursor: pointer;
            }
            &:disabled {
                cursor: not-allowed;
            }
        }

        .subtotal {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .total-price {
        font-weight: bold;
        font-size: 2.5rem;
    }
`