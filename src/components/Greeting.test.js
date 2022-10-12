import { render ,screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting"

describe("Greeting Component",()=>{
    test("Check render text as Hello world",()=>{
        // Arrange
        render(<Greeting/>);
        // Act
        // Assert
        const elements = screen.getByText('Hello World!');
        expect(elements).toBeInTheDocument();
    });
    test('render "good to see you!", if button was not clicked',()=>{
         // Arrange
         render(<Greeting/>);
         // Act
         // noting...
         // Assert
         const outputBeforeClick = screen.getByText('good to see you!', {exact:false});
         expect(outputBeforeClick).toBeInTheDocument();
    });
    test('render "Changed!", if button was clicked',()=>{
         // Arrange
         render(<Greeting/>);

         // Act
         const buttonElement = screen.getByRole('button');
         userEvent.click(buttonElement);

         // Assert
         const clickedOutput = screen.getByText('Changed!', {exact:false});
         expect(clickedOutput).toBeInTheDocument();
    });
    test('should not render "good to see you" if button clicked',()=>{
       // Arrange
       render(<Greeting/>);
       // Act
       const buttonElement = screen.getByRole('button');
       userEvent.click(buttonElement);
       // Assert
       const shouldNotrender = screen.queryByText('good to see you!', { exact : false});
       expect(shouldNotrender).toBeNull();
    })
})