import { Container } from "react-bootstrap";
import { Menu } from "../../components/Menu/Menu";
import { Outlet } from "react-router-dom";

export function Root() {
    return(
        <div className="root">
            <Menu />
            <Container>
                <Outlet />
            </Container>
        </div>
    );
}