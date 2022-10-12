import { fireEvent, render, screen} from '@testing-library/react';
import Forms from './Forms';
test("render Forms component",()=>{
    render(<Forms/>);
    const linkElement = screen.queryByRole("heading")
    expect(linkElement).toBeInTheDocument();
});

test("Button Diabled",()=>{
    render(<Forms/>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(btn).toBeDisabled();
});

test("Check Submit and success message",()=>{
    render(<Forms/>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    const messag = screen.getByTestId('success');

    expect(messag).toHaveTextContent("User Added Succesfuly!");
});

test("Check valid input value",()=>{
    render(<Forms/>);
    const inputVal = screen.getByPlaceholderText('Enter Name');
    fireEvent.change(inputVal,{target: {value:"New Content"}});
    const messag = screen.getByTestId('success');
    expect(messag).toHaveTextContent('');
});

test("Check Invalid inpt value",()=>{
    render(<Forms/>);
    const inputVal = screen.getByPlaceholderText('Enter Name');
    fireEvent.change(inputVal,{target: {value:"878686"}});
    const messag = screen.getByTestId('success');
    expect(messag).toHaveTextContent('Not A Number');
});
