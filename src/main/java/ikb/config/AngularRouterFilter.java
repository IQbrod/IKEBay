package ikb.config;

import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.regex.Pattern;

import javax.servlet.FilterChain;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class AngularRouterFilter extends OncePerRequestFilter {

  
    // add the values you want to redirect for
    private static final Pattern PATTERN = Pattern
            .compile("^/((api|swagger-ui|management|swagger-resources)/()|favicon\\.ico|v2/api-docs).*");

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        if (isServerRoute(request)) {
            filterChain.doFilter(request, response);
        } else {
            RequestDispatcher rd = request.getRequestDispatcher("/");
            rd.forward(request, response);
        }
    }

    protected static boolean isServerRoute(HttpServletRequest request) {
        Logger log = LoggerFactory.getLogger(AngularRouterFilter.class);
        if (request.getMethod().equals("GET")) {
            String uri = request.getRequestURI();
            log.info("Call to isServerRoute with link : " + request.getRequestURI() + " return " + PATTERN.matcher(uri).matches());
            return PATTERN.matcher(uri).matches();
        }
        return true;
    }
}