import React,{useState} from 'react'
import './addform.css'
import { categories } from "../../constants/add-expense";
import { toast, ToastContainer } from "react-toastify";
import {addExpense} from '../../redux/actions/expences';
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from './success-modal';

function AddForm() {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const cat = categories;
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState();
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false);

    const handleTitle = (e)=>{
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
          setAmount("");
          return;
        }
        setAmount(val);
      };

    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
        console.log(category);
      };
    
      const handleSubmit = ()=>{
        if (title === "" || amount === "" || !category) {
            const notify = () => toast("Please enter complete data");
            notify();
            return;
          }
        const data = {
            title,
            amount,
            category,
            createdAt:new Date()
        }
        dispatch(addExpense(data));
        setModalOpen(!modalOpen);
      }

    return (
        <div className="add-form">
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className="form-item">
                <label>Title</label>
                <input 
                    placeholder="Give a name to youe expenditure" 
                    value={title}
                    onChange={handleTitle}
                />
            </div>
            <div className="form-item">
                <label>Amount ₹</label>
                    <input 
                        placeholder="Enter Amount" 
                        value={amount}
                        onChange={handleAmount}
                    />
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div 
                        className="category-dropdown"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                    >
                        <label>{category ? category.title:'Category'}</label>
                        <i class="fi-rr-angle-down"/>
                    </div>
                    <div>
                    {categoryOpen && (
                        <div className="category-container">
                        {cat.map((category) => (
                            <div
                            className="category-item"
                            style={{ borderRight: `5px solid ${category.color}` }}
                            key={category.id}
                            onClick={() => handleCategory(category)}
                            >
                            <label>{category.title}</label>
                            <img src={category.icon} alt={category.title} />
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <div className="form-add-button">
                    <div onClick={handleSubmit}>
                        <label>Add</label>
                        <i class="fi-rr-paper-plane"></i>
                    </div>
                </div>
        </div>
    )
}

export default AddForm
