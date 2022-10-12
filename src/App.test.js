import { render, screen,fireEvent, waitFor} from '@testing-library/react';
import App from './App';

test("render app component",()=>{
    render(<App/>);
    const linkElement = screen.getByText(/Counter/i)
    expect(linkElement).toBeInTheDocument();
});

test("Query Method",()=>{
    render(<App/>);
    const linkElement = screen.getByText(/Counter/i)
    expect(linkElement).toBeInTheDocument();
});

test("Find Method", async () =>{
    render(<App/>);
    const linkElement = await screen.findByText(/Counter:/)
    expect(linkElement).toBeInTheDocument();
});

test("Check All buttons with Name",() =>{
    render(<App/>);
    const linkElement = screen.queryByRole("button",{name:'-',name:'+'})
    expect(linkElement).toBeInTheDocument();
});
test("P Tag getByText",() =>{
    render(<App/>);
    const linkElement = screen.getByText("Counter:",{exact:false})
    expect(linkElement).toBeInTheDocument();
});
test("P Tag getByTestId",() =>{
    render(<App/>);
    const linkElement = screen.getByTestId('counter-p')
    expect(linkElement).toBeInTheDocument();
});
test("Check All buttons and length",() =>{
    render(<App/>);
    const linkElement = screen.getAllByRole('button')
    expect(linkElement.length).toBe(5);
});

// test waitFor data to load 
test("Wait for load data", async () => {
   render(<App/>);
   // on button click
   const btn = screen.getByRole('button',{name:'Load Data'});
   fireEvent.click(btn);

   //const liItem = await waitFor(()=>screen.getByTestId("list-item"));

   // when api taking more time them use timeout 
   const liItem = await waitFor(()=>screen.getByTestId("list-item"),{timeout:1000});

   expect(liItem).toBeInTheDocument("Saiyad Husain Rahat Husain Nador Husain");
   
})
