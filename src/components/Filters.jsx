import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';
const Filters = () => {
  const {
    prodState: { byStock, byFastDelivery, sort, byRating },
    prodDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, sort, byRating);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form>
          <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={'inline-1'}
            onChange={() =>
              prodDispatch({
                type: 'Sort_By_Price',
                payload: 'lowToHigh',
              })
            }
            checked={sort === 'lowToHigh' ? true : false}
          />
        </Form>
      </span>
      <span>
        <Form>
          <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={'inline-2'}
            onChange={() =>
              prodDispatch({
                type: 'Sort_By_Price',
                payload: 'highToLow',
              })
            }
            checked={sort === 'highToLow' ? true : false}
          />
        </Form>
      </span>
      <span>
        <Form>
          <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={'inline-3'}
            onChange={() =>
              prodDispatch({
                type: 'Filter_By_Stock',
              })
            }
            checked={byStock}
          />
        </Form>
      </span>
      <span>
        <Form>
          <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={'inline-4'}
            onChange={() =>
              prodDispatch({
                type: 'Filter_By_Delivery',
              })
            }
            checked={byFastDelivery}
          />
        </Form>
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            prodDispatch({
              type: 'Filter_By_Rating',
              payload: i + 1,
            })
          }
          style={{ cursor: 'pointer' }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          prodDispatch({
            type: 'Clear_Filter',
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
